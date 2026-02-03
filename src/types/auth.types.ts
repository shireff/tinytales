export interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
  mobile_country_code: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  message: string;
  data: {
    token: string;
    user?: User;
  };
}

export interface UserResponse {
  message: string;
  data: User;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}
