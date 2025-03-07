'use client';

import Image from 'next/image';

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1E1E1E] py-5 px-6">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <Image 
            src="https://i.imgur.com/G6aMUah.png" 
            alt="Main" 
            width={28} 
            height={28} 
            className="mb-1.5"
          />
          <span className="text-white text-sm">Main</span>
        </div>
        <div className="flex flex-col items-center">
          <Image 
            src="https://i.imgur.com/QmVe8A9.png" 
            alt="Market" 
            width={28} 
            height={28} 
            className="mb-1.5"
          />
          <span className="text-gray-400 text-sm">Market</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 mb-1.5 flex items-center justify-center">
            <span className="text-2xl text-gray-400">🎁</span>
          </div>
          <span className="text-gray-400 text-sm">My Gifts</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 mb-1.5 flex items-center justify-center">
            <span className="text-2xl text-gray-400">⏰</span>
          </div>
          <span className="text-gray-400 text-sm">Auctions</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 mb-1.5 flex items-center justify-center">
            <span className="text-2xl text-gray-400">📊</span>
          </div>
          <span className="text-gray-400 text-sm">Activity</span>
        </div>
      </div>
    </div>
  );
} 