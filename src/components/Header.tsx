'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
        <div className="flex items-center gap-1">
          <span className="text-gray-400">balance:</span>
          <span className="text-blue-400">▼</span>
          <span className="text-white font-bold">0.00</span>
        </div>
      </div>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2">
        <span className="text-blue-200">▼</span>
        <span>Connect Wallet</span>
      </button>
    </div>
  );
} 