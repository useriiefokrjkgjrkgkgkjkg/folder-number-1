'use client';

import Header from '@/components/Header';
import ActionButton from '@/components/ActionButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-20">
      <Header />
      
      <div className="flex justify-around px-8 mt-10">
        <ActionButton icon="🌱" label="Запустить токен" />
        <ActionButton icon="🔥" label="Memepad" />
        <ActionButton icon="🚀" label="Трейдинг-бот" />
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
    </main>
  );
}

