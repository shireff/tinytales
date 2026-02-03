"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { authService } from "@/services/auth.service";
import { useAuth } from "@/hooks/useAuth";
import { useApiError } from "@/hooks/useApiError";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { error, handleError, clearError } = useApiError();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginValues) => {
    setLoading(true);
    clearError();
    try {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);

      const response = await authService.login(formData);
      const token = response.data.token;

      localStorage.setItem("token", token);

      const userResponse = await authService.getUserData();

      login(token, userResponse.data);
      router.push("/dashboard");
    } catch (err) {
      handleError(err, "Invalid email or password. Please try again.");
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-(--background) font-poppins">
      <div className="w-full max-w-120 space-y-8 animate-in fade-in duration-700">
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
            Tinytales
          </h1>
        </div>

        <Card className="p-8 md:p-10 rounded-4xl border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#BE968E]/5 rounded-full -translate-y-1/2 translate-x-1/2 z-0" />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#020202]">
                Welcome Back
              </h2>
              <p className="text-[#8A8A8A] mt-2 text-sm font-medium">
                Please enter Email and Password to sign in
              </p>
            </div>

            {error && (
              <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-xs font-bold animate-shake">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#020202] uppercase tracking-wider ml-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="name@email.com"
                  className="h-14 rounded-xl bg-[#F9F9F9] border-[#EEEEEE] focus:border-[#BE968E] transition-all px-5"
                  {...register("email")}
                  error={errors.email?.message}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[13px] font-bold text-[#020202] uppercase tracking-wider">
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-[11px] font-black text-[#BE968E] uppercase tracking-widest hover:opacity-80 transition-opacity"
                  >
                    Forgot?
                  </Link>
                </div>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="h-14 rounded-xl bg-[#F9F9F9] border-[#EEEEEE] focus:border-[#BE968E] transition-all px-5"
                  {...register("password")}
                  error={errors.password?.message}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-2xl text-white font-bold text-sm uppercase tracking-widest mt-4 shadow-lg active:scale-[0.98] transition-all bg-[#BE968E]"
                isLoading={loading}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Card>

        <p className="text-center text-[#8A8A8A] text-sm font-medium">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-[#BE968E] font-bold hover:underline underline-offset-4 decoration-2"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
