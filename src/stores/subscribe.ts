import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SubscribeState {
  subscribed: boolean;
  setSubscribed: (value: boolean) => void;
}

export const useSubscribe = create<SubscribeState>()(
  persist(
    (set) => ({
      subscribed: false,
      setSubscribed: (value) => set({ subscribed: value }),
    }),
    {
      name: 'subscribe-storage',
    }
  )
);
