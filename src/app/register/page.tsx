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
import { useApiError } from "@/hooks/useApiError";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    password_confirmation: z.string(),
    mobile: z.string().min(8, "Invalid phone number"),
    mobile_country_code: z.string().min(1, "Required"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  });

type RegisterValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { error, handleError, clearError } = useApiError();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      mobile_country_code: "+20",
    },
  });

  const onSubmit = async (values: RegisterValues) => {
    setLoading(true);
    clearError();
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await authService.register(formData);
      localStorage.setItem("token", response.data.token);
      router.push("/verify");
    } catch (err) {
      handleError(err, "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-(--background) font-poppins">
      <div className="w-full max-w-135 space-y-8 animate-in mt-12 mb-12 duration-700 fade-in">
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
            Create Account
          </h1>
        </div>

        <Card className="p-8 md:p-12 rounded-4xl border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#BE968E]/5 rounded-full -translate-y-1/2 -translate-x-1/2 z-0" />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#020202]">
                Join Tinytales
              </h2>
              <p className="text-[#8A8A8A] mt-2 text-sm font-medium">
                Start your journey with us today
              </p>
            </div>

            {error && (
              <div className="mb-8 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-xs font-bold animate-shake">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#020202] uppercase tracking-wider ml-1">
                  Full Name
                </label>
                <Input
                  placeholder="Your Name"
                  className="h-14 rounded-xl bg-[#F9F9F9] border-[#EEEEEE] focus:border-[#BE968E] transition-all px-5"
                  {...register("name")}
                  error={errors.name?.message}
                />
              </div>

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

              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 space-y-2">
                  <label className="text-[13px] font-bold text-[#020202] uppercase tracking-wider ml-1">
                    Code
                  </label>
                  <Input
                    placeholder="+20"
                    className="h-14 rounded-xl bg-[#F9F9F9] border-[#EEEEEE] focus:border-[#BE968E] transition-all text-center px-0"
                    {...register("mobile_country_code")}
                    error={errors.mobile_country_code?.message}
                  />
                </div>
                <div className="col-span-3 space-y-2">
                  <label className="text-[13px] font-bold text-[#020202] uppercase tracking-wider ml-1">
                    Phone Number
                  </label>
                  <Input
                    placeholder="123456789"
                    className="h-14 rounded-xl bg-[#F9F9F9] border-[#EEEEEE] focus:border-[#BE968E] transition-all px-5"
                    {...register("mobile")}
                    error={errors.mobile?.message}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#020202] uppercase tracking-wider ml-1">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="h-14 rounded-xl bg-[#F9F9F9] border-[#EEEEEE] focus:border-[#BE968E] transition-all px-5"
                    {...register("password")}
                    error={errors.password?.message}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#020202] uppercase tracking-wider ml-1">
                    Confirm
                  </label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="h-14 rounded-xl bg-[#F9F9F9] border-[#EEEEEE] focus:border-[#BE968E] transition-all px-5"
                    {...register("password_confirmation")}
                    error={errors.password_confirmation?.message}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-2xl text-white font-bold text-sm uppercase tracking-widest mt-6 shadow-lg active:scale-[0.98] transition-all bg-[#BE968E]"
                isLoading={loading}
              >
                Get Started
              </Button>
            </form>
          </div>
        </Card>

        <p className="text-center text-[#8A8A8A] text-sm font-medium pb-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#BE968E] font-bold hover:underline underline-offset-4 decoration-2"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
