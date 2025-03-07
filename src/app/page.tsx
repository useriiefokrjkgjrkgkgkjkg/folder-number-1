'use client';

import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-28 relative">
      <Header />

      <div className="mx-4 mt-10">
        <div className="bg-[#1E1E1E] hover:bg-[#252525] rounded-2xl p-5 flex items-center justify-between transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#252525] hover:bg-[#2a2a2a] rounded-full flex items-center justify-center transition-all duration-300">
              <span className="text-yellow-400 text-2xl animate-pulse">⚡</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-lg hover:text-[#2E9BFA] transition-colors duration-300">3-days день чек-ина</h3>
              <p className="text-gray-400 text-sm mt-1">Следующий клейм через 14h 12m</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-[#252525] hover:bg-[#2a2a2a] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
            <span className="text-green-400 text-lg">✓</span>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4">
        <div className="bg-[#1E1E1E] hover:bg-[#252525] rounded-2xl p-5 transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-white text-xl font-semibold hover:text-[#2E9BFA] transition-colors duration-300">Второй сезон уже тут</h2>
              <p className="text-gray-400 mt-2 text-sm">Трейди или запускай свой токен,<br />чтобы получить Meme поинты</p>
              <button className="mt-4 bg-[#252525] hover:bg-[#2a2a2a] text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95">
                Как это работает
              </button>
            </div>
            <div className="w-16 h-16 bg-[#252525] hover:bg-[#2a2a2a] rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-12">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

