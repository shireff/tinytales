import { useAuth } from "./useAuth";

export const useUser = () => {
  const { user, loading, refreshUser } = useAuth();
  return { user, loading, refreshUser };
};
