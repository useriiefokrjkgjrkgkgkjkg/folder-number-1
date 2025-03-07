'use client';

import Header from '@/components/Header';
import ActionButton from '@/components/ActionButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-20">
      <Header />
      
      <div className="flex justify-around px-4 mt-8">
        <ActionButton icon="🌱" label="Запустить токен" />
        <ActionButton icon="🔥" label="Memepad" />
        <ActionButton icon="🚀" label="Трейдинг-бот" />
      </div>

      <div className="mx-4 mt-8">
        <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-2xl">⚡</span>
            <div>
              <h3 className="text-white font-semibold">3-days день чек-ина</h3>
              <p className="text-gray-400 text-sm">Следующий клейм через 14h 12m</p>
            </div>
          </div>
          <span className="text-green-400 text-xl">✓</span>
        </div>
      </div>

      <div className="mx-4 mt-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-white text-xl font-bold">Второй сезон уже тут</h2>
              <p className="text-gray-400 mt-2">Трейди или запускай свой токен, чтобы получить Meme поинты</p>
              <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg">
                Как это работает
              </button>
            </div>
            <div className="w-20 h-20">
              <div className="w-full h-full bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
