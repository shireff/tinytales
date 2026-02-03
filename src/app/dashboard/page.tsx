"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div
          className="w-10 h-10 border-4 border-[#BE968E] border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
      </div>
    );
  }

  const displayName = user.name?.trim() || "User";

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-poppins">
      <Header />

      <main className="flex-1 pt-30 pb-24">
        <div className="max-w-300 mx-auto px-6">
          <div className="bg-white rounded-4xl p-10 md:p-16 shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#BE968E]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-[#BE968E]/10 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-[#020202]">
                  Welcome back,
                  <span className="text-[#BE968E] block md:inline md:ml-3">
                    {displayName}
                  </span>
                </h1>

                <div className="pt-4">
                  <Link
                    href="/products/1"
                    className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-[#020202] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#1A1A1A] transition-all active:scale-[0.98] gap-3"
                  >
                    Go to Shop
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
