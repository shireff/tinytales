"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { authService } from "@/services/auth.service";
import { useApiError } from "@/hooks/useApiError";
import { MailCheck } from "lucide-react";

const verifySchema = z.object({
  code: z
    .string()
    .min(6, "Verification code must be 6 digits")
    .max(6, "Verification code must be 6 digits"),
});

type VerifyValues = z.infer<typeof verifySchema>;

export default function VerifyPage() {
  const { error, handleError, clearError } = useApiError();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyValues>({
    resolver: zodResolver(verifySchema),
  });

  const onSubmit = async (values: VerifyValues) => {
    setLoading(true);
    clearError();
    try {
      const formData = new FormData();
      formData.append("code", values.code);

      await authService.verifyEmail(formData);
      router.push("/login");
    } catch (err) {
      handleError(err, "Invalid verification code. Use 123456 for testing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-(--background) font-poppins">
      <div className="w-full max-w-120 space-y-8 animate-in duration-700 fade-in">
        <div className="flex flex-col items-center gap-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Tinytales Logo"
              width={66}
              height={51}
              className="object-contain w-[65.59px] h-12.75"
            />
          </Link>
          <h1 className="text-3xl font-bold text-[#020202] tracking-tight">
            Verify Account
          </h1>
        </div>

        <Card className="p-8 md:p-12 rounded-4xl border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white overflow-hidden relative text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#BE968E]/5 rounded-full -translate-y-1/2 translate-x-1/2 z-0" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#BE968E]/10 text-[#BE968E] rounded-3xl flex items-center justify-center mb-8 shadow-inner font-poppins">
              <MailCheck size={40} strokeWidth={1.5} />
            </div>

            <h2 className="text-2xl font-bold text-[#020202] mb-3">
              Check your email
            </h2>
            <p className="text-[#8A8A8A] mb-4 text-sm font-medium leading-relaxed max-w-70 mx-auto">
              We&apos;ve sent a 6-digit verification code to your inbox. Please
              enter it below.
            </p>

            <p className="text-[#BE968E] mb-10 text-xs font-bold bg-[#BE968E]/5 px-4 py-2 rounded-lg">
              Note: the correct verification code for testing is 123456.
            </p>

            {error && (
              <div className="mb-8 w-full px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-xs font-bold animate-shake">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#020202] uppercase tracking-wider block text-left ml-1">
                  6-Digit Code
                </label>
                <Input
                  placeholder="000000"
                  className="h-18 rounded-2xl bg-[#F9F9F9] border-[#EEEEEE] focus:border-[#BE968E] transition-all text-center text-4xl font-black tracking-[0.3em] placeholder:tracking-normal placeholder:text-slate-200"
                  maxLength={6}
                  {...register("code")}
                  error={errors.code?.message}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-2xl text-white font-bold text-sm uppercase tracking-widest shadow-lg active:scale-[0.98] transition-all bg-[#BE968E]"
                isLoading={loading}
              >
                Verify Account
              </Button>
            </form>

            <p className="mt-10 text-sm text-[#8A8A8A] font-medium">
              Didn&apos;t receive the code?{" "}
              <button className="text-[#BE968E] font-bold hover:underline underline-offset-4 decoration-2">
                Resend Code
              </button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
