import { create } from 'zustand';

type AuthState = {
  user: null | { email: string };
  setUser: (user: { email: string } | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));