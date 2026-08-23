import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [lit, setLit] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    if (count >= 19) {
      setLit(false);
      setCount(0);
    }
  };

  const handleLight = () => {
    setLit(!lit);
    if (!lit && count === 0) {
      setCount(1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Cigarette Counter</h1>

        <div className="flex justify-center mb-6">
          <div
            className={`w-48 h-12 rounded-full ${lit ? 'bg-orange-400' : 'bg-gray-200'} flex items-center justify-end pr-2 transition-all duration-300`}
            onClick={handleLight}
          >
            <div className={`w-4 h-4 rounded-full ${lit ? 'bg-red-500 shadow-glow' : 'bg-gray-400'}`} />
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-gray-700">{count}/20</div>
          <div className="text-sm text-gray-500">puffs remaining</div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200"
          >
            Take Puff
          </button>
        </div>
      </div>
    </div>
  );
}