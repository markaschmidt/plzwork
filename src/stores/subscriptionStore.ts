import { create } from 'zustand';

type SubscriptionTier = 'free' | 'premium' | 'deluxe';

interface SubscriptionState {
  currentTier: SubscriptionTier;
  setTier: (tier: SubscriptionTier) => void;
}

const useSubscriptionStore = create<SubscriptionState>((set) => ({
  currentTier: 'free',
  setTier: (tier) => set({ currentTier: tier }),
}));

export { useSubscriptionStore };

export type { SubscriptionTier };