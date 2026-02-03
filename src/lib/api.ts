import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://tinytales.trendline.marketing/api";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const isUnauthorized = error.response?.status === 401;
    
    if (isUnauthorized && typeof window !== "undefined") {
      localStorage.removeItem("token");
      
      const isLoginPage = window.location.pathname.includes("/login");
      if (!isLoginPage) {
        window.location.href = "/login";
      }
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
