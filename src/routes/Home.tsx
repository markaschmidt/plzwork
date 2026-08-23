import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 mb-8">This is the homepage. Content will be added soon.</p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Current Status</h2>
          <p className="text-gray-600">The website is under active development. Check back soon for updates!</p>
        </div>
      </div>
    </div>
  );
}