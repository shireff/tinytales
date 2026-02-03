import apiClient from "../lib/api";
import { AuthResponse, UserResponse } from "../types/auth.types";

export const authService = {
  async register(formData: FormData): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>("/auth/register", formData);
    return data;
  },

  async verifyEmail(formData: FormData): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>("/auth/verify-email", formData);
    return data;
  },

  async login(formData: FormData): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>("/auth/login", formData);
    return data;
  },

  async getUserData(): Promise<UserResponse> {
    const { data } = await apiClient.get<UserResponse>("/auth/user-data");
    return data;
  },

  logout(): void {
    localStorage.removeItem("token");
  },
};
