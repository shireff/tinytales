"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo, memo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { User } from "../types/auth.types";
import { authService } from "../services/auth.service";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const PUBLIC_ROUTES = ["/login", "/register", "/verify"] as const;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = memo(({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const isPublicRoute = useMemo(() =>
    PUBLIC_ROUTES.some(route => pathname.startsWith(route)),
    [pathname]
  );

  const fetchUserData = useCallback(async () => {
    try {
      const { data } = await authService.getUserData();
      setUser(data);
    } catch (error) {
      logout();
    }
  }, []);

  const login = useCallback((newToken: string, newUser: User) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser(newUser);
    router.push("/dashboard");
  }, [router]);

  const logout = useCallback(() => {
    authService.logout();
    setToken(null);
    setUser(null);

    if (!isPublicRoute) {
      router.push("/login");
    }
  }, [isPublicRoute, router]);

  useEffect(() => {
    const initAuth = async () => {
      const savedToken = localStorage.getItem("token");

      if (savedToken) {
        setToken(savedToken);
        try {
          const { data } = await authService.getUserData();
          setUser(data);
        } catch (error) {
          localStorage.removeItem("token");
          setToken(null);
        }
      }

      setLoading(false);
    };

    initAuth();
  }, []);

  useEffect(() => {
    if (loading) return;

    const hasUser = !!user;

    if (!hasUser && !isPublicRoute) {
      router.push("/login");
    } else if (hasUser && isPublicRoute && pathname !== "/verify") {
      router.push("/dashboard");
    }
  }, [user, loading, pathname, isPublicRoute, router]);

  const contextValue = useMemo(() => ({
    user,
    loading,
    token,
    login,
    logout,
    refreshUser: fetchUserData,
  }), [user, loading, token, login, logout, fetchUserData]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
});

AuthProvider.displayName = "AuthProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
