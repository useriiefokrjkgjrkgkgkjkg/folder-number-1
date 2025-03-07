'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#1E1E1E] rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-xl">👤</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1E1E1E] px-4 py-2 rounded-full">
          <span className="text-gray-400">balance:</span>
          <span className="text-[#2E9BFA]">$</span>
          <span className="text-white font-medium">0.00</span>
        </div>
      </div>
      <button className="bg-[#2E9BFA] hover:bg-[#2788e0] text-white px-4 py-1.5 rounded-full flex items-center gap-2 font-medium transition-colors text-sm">
        <span className="text-white opacity-80">💳</span>
        Connect Wallet
      </button>
    </div>
  );
} 