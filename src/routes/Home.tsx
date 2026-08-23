import { useState } from 'react';
import { useSubscriptionStore } from '../stores/subscriptionStore';

const tiers = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    description: 'Basic features with ads',
    features: ['Limited access', 'Community support', 'Basic analytics'],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$4.99/mo',
    description: 'Great value for regular users',
    features: ['Full access', 'Priority support', 'Advanced analytics', 'No ads'],
  },
  {
    id: 'deluxe',
    name: 'Deluxe',
    price: '$9.99/mo',
    description: 'Best for power users',
    features: ['Everything in Premium', 'Early access', 'Dedicated support', 'Enhanced features'],
  },
];

export default function Home() {
  const { subscribe, currentTier } = useSubscriptionStore();
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Green Header */}
      <header className="bg-green-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Upgrade Your Experience</h1>
        <p className="text-xl mb-8">Choose the perfect plan for your needs</p>
        <button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          See Plans
        </button>
      </header>

      {/* Subscription Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-xl shadow-lg p-8 border-2 transition-all ${
                selectedTier === tier.id ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-4xl font-bold text-green-600 mb-4">{tier.price}</p>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setSelectedTier(tier.id);
                  subscribe(tier.id);
                }}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  currentTier === tier.id
                    ? 'bg-green-500 text-white'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {currentTier === tier.id ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}