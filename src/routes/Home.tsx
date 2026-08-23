import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Temporary redirect to demonstrate routing
    // Remove this when actual content is added
    const timer = setTimeout(() => {
      navigate('/');
    }, 100);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Homepage</h1>
        <p className="text-gray-600 mb-6">This is a placeholder for the homepage content.</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Current route: /</p>
          <p className="text-sm text-gray-500 mt-2">App is running successfully</p>
        </div>
      </div>
    </div>
  );
}