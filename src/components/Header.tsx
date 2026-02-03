"use client";

import React, { useState, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  User as UserIcon,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import HeaderIconButton from "./HeaderIconButton";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: "/header-icons/home-icon.png" },
  { name: "Our Category", href: "#", icon: "/header-icons/our-categ-icon.png" },
  { name: "About Us", href: "/about", icon: "/header-icons/about-icon.png" },
  { name: "Contact Us", href: "/contact", icon: "/header-icons/contact-icon.png" },
  { name: "FAQs", href: "/faqs", icon: "/header-icons/FAQs-icon.png" },
] as const;

const ASSETS = {
  logo: "/logo.png",
  icons: {
    shopping: "/header-icons/shpping.png",
    notification: "/header-icons/notification.png",
    love: "/header-icons/love.png",
    dropdown: "/header-icons/mingcute_down-line.png",
    user: "/header-icons/user.png",
  },
} as const;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleUserMenu = useCallback(() => setIsUserMenuOpen((prev) => !prev), []);
  const closeUserMenu = useCallback(() => setIsUserMenuOpen(false), []);

  const handleLogout = useCallback(() => {
    closeUserMenu();
    logout();
  }, [closeUserMenu, logout]);

  return (
    <header className="relative z-50 flex min-h-[91px] items-center border-b border-slate-50 bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 md:px-[60px]">
        <div className="flex items-center gap-5">
          <Link href="/" className="shrink-0 transition-transform active:scale-95">
            <Image
              src={ASSETS.logo}
              alt="Tinytales Logo"
              width={66}
              height={51}
              className="h-[51px] w-[65.59px] object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-3 py-2 text-[15px] font-semibold text-[#020202] transition-opacity hover:opacity-70 font-poppins"
              >
                <Image
                  src={link.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-3">
            <div className="hidden md:flex items-center gap-2">
              <HeaderIconButton src={ASSETS.icons.shopping} alt="Cart" />
              <HeaderIconButton src={ASSETS.icons.notification} alt="Notifications" />
              <HeaderIconButton src={ASSETS.icons.love} alt="Wishlist" />
            </div>

            <div className="hidden md:flex items-center gap-1 cursor-pointer px-2 transition-opacity hover:opacity-80">
              <span className="text-[15px] font-semibold text-[#020202] font-poppins uppercase">
                EN
              </span>
              <Image
                src={ASSETS.icons.dropdown}
                alt="Switch Language"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>

            <div className="relative hidden md:block">
              <button
                onClick={toggleUserMenu}
                className="relative flex items-center justify-center p-1 transition-all hover:opacity-70"
                aria-label="User account"
                aria-expanded={isUserMenuOpen}
              >
                <Image
                  src={ASSETS.icons.user}
                  alt="Profile"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 z-[999] mt-2 w-64 origin-top-right rounded-2xl border border-slate-100 bg-white py-4 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <button
                    onClick={closeUserMenu}
                    className="absolute right-4 top-4 p-1 text-slate-400 transition-colors hover:text-[#020202]"
                  >
                    <X size={18} />
                  </button>

                  {user ? (
                    <div className="flex flex-col">
                      <div className="mb-2 border-b border-slate-50 px-6 py-3">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          Account
                        </p>
                        <p className="truncate text-sm font-bold text-[#020202]">
                          {user.name}
                        </p>
                      </div>
                      <Link
                        href="/dashboard"
                        onClick={closeUserMenu}
                        className="flex items-center gap-3 px-6 py-3 text-sm font-semibold text-[#020202] transition-colors hover:bg-slate-50"
                      >
                        <LayoutDashboard size={18} className="text-slate-400" />
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 px-6 py-3 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
                      >
                        <LogOut size={18} className="text-red-400" />
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <div className="mb-2 px-6 py-2">
                        <h3 className="text-sm font-bold text-[#020202]">Welcome</h3>
                        <p className="text-xs text-slate-500">Sign in to explore</p>
                      </div>
                      <Link
                        href="/login"
                        onClick={closeUserMenu}
                        className="flex items-center gap-3 px-6 py-3 text-sm font-semibold text-[#020202] transition-colors hover:bg-slate-50"
                      >
                        <UserIcon size={18} className="text-slate-400" />
                        Login
                      </Link>
                      <Link
                        href="/register"
                        onClick={closeUserMenu}
                        className="flex items-center gap-3 px-6 py-3 text-sm font-semibold text-[#BE968E] transition-colors hover:bg-slate-50"
                      >
                        <UserIcon size={18} className="text-[#BE968E]" />
                        Create Account
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[#020202] transition-transform active:scale-95"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[100] transition-all duration-500 lg:hidden",
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />

        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col p-6",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="mb-10 flex items-center justify-between">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src={ASSETS.logo}
                alt="Logo"
                width={50}
                height={38}
                className="object-contain"
              />
            </Link>
            <button
              onClick={closeMobileMenu}
              className="rounded-full p-2 text-[#020202] transition-colors hover:bg-slate-50"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="group flex items-center gap-4 rounded-2xl px-4 py-4 text-base font-semibold text-[#020202] transition-colors hover:bg-[#BE968E]/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 transition-colors group-hover:bg-[#BE968E]/10">
                  <Image
                    src={link.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-slate-100 pt-8 flex flex-col gap-4">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={closeMobileMenu}
                  className="flex h-14 w-full items-center gap-4 rounded-2xl bg-slate-50 px-4 text-sm font-bold text-[#020202] transition-all active:scale-[0.98]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    <LayoutDashboard size={18} className="text-[#BE968E]" />
                  </div>
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex h-14 w-full items-center gap-4 rounded-2xl bg-red-50 px-4 text-sm font-bold text-red-600 transition-all active:scale-[0.98]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    <LogOut size={18} />
                  </div>
                  Log Out
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="flex h-12 items-center justify-center rounded-2xl border border-slate-100 text-sm font-bold text-[#020202]"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={closeMobileMenu}
                  className="flex h-12 items-center justify-center rounded-2xl bg-[#BE968E] text-sm font-bold text-white shadow-sm active:scale-95"
                >
                  Join
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
