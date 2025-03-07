'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#1E1E1E] rounded-full"></div>
        <div className="flex items-center gap-1">
          <span className="text-gray-400">balance:</span>
          <span className="text-[#2E9BFA]">▼</span>
          <span className="text-white text-lg">0.00</span>
        </div>
      </div>
      <button className="bg-[#2E9BFA] hover:bg-[#2788e0] text-white px-5 py-2 rounded-full flex items-center gap-2 font-medium transition-colors">
        <span className="text-[#2E9BFA] bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-sm">▼</span>
        <span>Connect<br/>Wallet</span>
      </button>
    </div>
  );
} 