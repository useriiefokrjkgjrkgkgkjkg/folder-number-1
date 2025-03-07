'use client';

import Image from 'next/image';

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1E1E1E] py-6 px-8">
      <div className="flex justify-between items-center max-w-2xl mx-auto">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image 
            src="https://i.imgur.com/G6aMUah.png" 
            alt="Main" 
            width={40} 
            height={40} 
            className="mb-2 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-white text-base">Main</span>
        </div>
        <div className="flex flex-col items-center group cursor-pointer">
          <Image 
            src="https://i.imgur.com/QmVe8A9.png" 
            alt="Market" 
            width={40} 
            height={40} 
            className="mb-2 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-gray-400 text-base">Market</span>
        </div>
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-10 h-10 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-3xl text-gray-400">🎁</span>
          </div>
          <span className="text-gray-400 text-base">My Gifts</span>
        </div>
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-10 h-10 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-3xl text-gray-400">⏰</span>
          </div>
          <span className="text-gray-400 text-base">Auctions</span>
        </div>
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-10 h-10 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-3xl text-gray-400">📊</span>
          </div>
          <span className="text-gray-400 text-base">Activity</span>
        </div>
      </div>
    </div>
  );
} 