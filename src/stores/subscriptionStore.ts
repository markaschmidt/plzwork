import { create } from 'zustand';

type SubscriptionTier = 'free' | 'premium' | 'deluxe';

interface SubscriptionState {
  currentTier: SubscriptionTier;
  subscribe: (tier: SubscriptionTier) => void;
  unsubscribe: () => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  currentTier: 'free',
  subscribe: (tier) => set({ currentTier: tier }),
  unsubscribe: () => set({ currentTier: 'free' }),
}));

export type { SubscriptionTier };
