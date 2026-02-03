import { useState, useCallback } from "react";
import axios from "axios";

export const useApiError = () => {
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((err: unknown, fallbackMessage: string = "An unexpected error. Please try again.") => {
    console.error("API Error:", err);
    
    let message = fallbackMessage;
    
    if (axios.isAxiosError(err)) {
      message = err.response?.data?.message || err.message || fallbackMessage;
    } else if (err instanceof Error) {
      message = err.message;
    }

    setError(message);
    return message;
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return {
    error,
    setError,
    handleError,
    clearError
  };
};
