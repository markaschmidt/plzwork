import { useState } from 'react';
import { useSubscriptionStore } from '../stores/subscriptionStore';

const tiers = [
  { id: 'free', name: 'Free', price: '$0', features: ['Basic access', 'Limited features'] },
  { id: 'premium', name: 'Premium', price: '$9.99/mo', features: ['Full access', 'Advanced features', 'Priority support'] },
  { id: 'deluxe', name: 'Deluxe', price: '$19.99/mo', features: ['All Premium features', 'Exclusive content', '24/7 support'] }
];

const Home = () => {
  const { currentTier, setTier } = useSubscriptionStore();
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Green Header */}
      <header className="bg-green-600 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Premium Service</h1>
      </header>

      {/* Hero Section with CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Get Started Today</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Choose the perfect plan for your needs and unlock all features with our subscription service.
        </p>
        <button
          onClick={() => setIsSubscribed(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          {isSubscribed ? 'Subscribed!' : 'Get Started'}
        </button>
      </section>

      {/* Subscription Tiers */}
      <section className="py-12 px-6">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Choose Your Plan</h3>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-xl shadow-lg p-8 border-2 transition-all ${currentTier === tier.id ? 'border-green-500 ring-4 ring-green-100' : 'border-gray-200'}`}
            >
              <h4 className="text-xl font-bold text-gray-800 mb-2">{tier.name}</h4>
              <p className="text-3xl font-bold text-green-600 mb-4">{tier.price}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setTier(tier.id)}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${currentTier === tier.id ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {currentTier === tier.id ? 'Active' : 'Select'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;