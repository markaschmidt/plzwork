import { useState } from 'react';
import { useSubscribe } from '../stores/subscribe';

const Header = () => {
  const subscribe = useSubscribe();

  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vektral</h1>
        <button
          onClick={() => subscribe.setSubscribed(true)}
          className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Subscribe Now
        </button>
      </div>
    </header>
  );
};

const HeroSection = () => {
  const { subscribed, setSubscribed } = useSubscribe();

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-6">Welcome to Vektral</h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Join our community and get access to exclusive content and features.
      </p>
      {!subscribed ? (
        <button
          onClick={() => setSubscribed(true)}
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          Get Started
        </button>
      ) : (
        <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-3 rounded-lg inline-block">
          You are subscribed! Thank you.
        </div>
      )}
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
    </div>
  );
}
