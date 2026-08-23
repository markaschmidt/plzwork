import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to the Homepage</h1>
        <p className="text-gray-600 mb-4">This is the current state of the homepage.</p>
        <p className="text-gray-600">The application is properly routed and ready for content.</p>
      </div>
    </div>
  );
}