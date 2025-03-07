'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between items-start p-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
          {/* Здесь будет аватарка пользователя */}
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400 text-base mb-0.5">balance:</span>
          <div className="flex items-center gap-1.5">
            <Image 
              src="https://i.imgur.com/CpV6f2c.png" 
              alt="Logo" 
              width={24} 
              height={24} 
              className="text-[#2E9BFA]"
            />
            <span className="text-white text-xl font-medium">0.00</span>
          </div>
        </div>
      </div>
      <button className="bg-[#2E9BFA] hover:bg-[#2788e0] text-white px-10 py-0.5 rounded-full flex items-center gap-3 font-medium transition-colors text-sm">
        <Image 
          src="https://i.imgur.com/CpV6f2c.png" 
          alt="Logo" 
          width={28} 
          height={28} 
          className="text-[#2E9BFA] bg-white/20 rounded-full p-1"
        />
        <span>Connect<br/>Wallet</span>
      </button>
    </div>
  );
} 