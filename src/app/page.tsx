'use client';

import Header from '@/components/Header';
import ActionButton from '@/components/ActionButton';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-28 relative">
      <Header />
      
      <div className="flex justify-around px-8 mt-10">
        <ActionButton icon="🌱" label="My Gifts" />
        <ActionButton icon="🚀" label="Market" />
        <ActionButton icon="🔥" label="Actions" />
      </div>

      <div className="mx-4 mt-10">
        <div className="bg-[#1E1E1E] rounded-2xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#252525] rounded-full flex items-center justify-center">
              <span className="text-yellow-400 text-2xl">⚡</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-lg">3-days день чек-ина</h3>
              <p className="text-gray-400 text-sm mt-1">Следующий клейм через 14h 12m</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-[#252525] rounded-full flex items-center justify-center">
            <span className="text-green-400 text-lg">✓</span>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4">
        <div className="bg-[#1E1E1E] rounded-2xl p-5">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-white text-xl font-semibold">Второй сезон уже тут</h2>
              <p className="text-gray-400 mt-2 text-sm">Трейди или запускай свой токен,<br />чтобы получить Meme поинты</p>
              <button className="mt-4 bg-[#252525] hover:bg-[#2a2a2a] text-white px-5 py-2.5 rounded-xl font-medium transition-colors">
                Как это работает
              </button>
            </div>
            <div className="w-16 h-16 bg-[#252525] rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1E1E1E] py-5 px-6">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <Image 
              src="https://i.imgur.com/G6aMUah.png" 
              alt="Main" 
              width={32} 
              height={32} 
              className="mb-1.5"
            />
            <span className="text-white text-sm">Main</span>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src="https://i.imgur.com/QmVe8A9.png" 
              alt="Market" 
              width={32} 
              height={32} 
              className="mb-1.5"
            />
            <span className="text-gray-400 text-sm">Market</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 mb-1.5 flex items-center justify-center">
              <span className="text-2xl text-gray-400">🎁</span>
            </div>
            <span className="text-gray-400 text-sm">My Gifts</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 mb-1.5 flex items-center justify-center">
              <span className="text-2xl text-gray-400">⏰</span>
            </div>
            <span className="text-gray-400 text-sm">Auctions</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 mb-1.5 flex items-center justify-center">
              <span className="text-2xl text-gray-400">📊</span>
            </div>
            <span className="text-gray-400 text-sm">Activity</span>
          </div>
        </div>
      </div>
    </main>
  );
}

