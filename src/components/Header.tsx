'use client';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <span className="text-gray-400">Баланс:</span>
        <span className="text-white font-medium">1,234.56 TON</span>
      </div>
      <button className="bg-[#2E9BFA] hover:bg-[#2687dd] text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95">
        Подключить кошелек
      </button>
    </div>
  );
} 