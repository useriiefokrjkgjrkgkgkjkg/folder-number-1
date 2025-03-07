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
          <div className="flex items-center gap-1 mb-0.5">
            <Image 
              src="https://i.imgur.com/CpV6f2c.png" 
              alt="Logo" 
              width={20} 
              height={20} 
              className="text-[#2E9BFA]"
            />
            <span className="text-white text-sm">0.00</span>
          </div>
          <span className="text-gray-400 text-base">balance:</span>
        </div>
      </div>
      <button className="bg-[#2E9BFA] hover:bg-[#2788e0] text-white px-10 py-1 rounded-full flex items-center gap-3 font-medium transition-colors">
        <Image 
          src="https://i.imgur.com/CpV6f2c.png" 
          alt="Logo" 
          width={32} 
          height={32} 
          className="text-[#2E9BFA] bg-white/20 rounded-full p-1.5"
        />
        <span>Connect<br/>Wallet</span>
      </button>
    </div>
  );
} 