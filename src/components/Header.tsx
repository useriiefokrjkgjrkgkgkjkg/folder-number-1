'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 bg-white rounded-full overflow-hidden">
          {/* Здесь будет аватарка пользователя */}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-white text-2xl">balance:</span>
          <div className="flex items-center gap-2">
            <Image 
              src="https://i.imgur.com/CpV6f2c.png" 
              alt="Logo" 
              width={24} 
              height={24} 
              className="text-[#2E9BFA]"
            />
            <span className="text-white text-4xl font-bold tracking-wider">0.00</span>
          </div>
        </div>
      </div>
      <button className="bg-[#2E9BFA] hover:bg-[#2788e0] text-white px-8 py-1.5 rounded-full flex items-center gap-2 font-medium transition-colors">
        <Image 
          src="https://i.imgur.com/CpV6f2c.png" 
          alt="Logo" 
          width={16} 
          height={16} 
          className="text-[#2E9BFA] bg-white/20 rounded-full p-1"
        />
        <span>Connect<br/>Wallet</span>
      </button>
    </div>
  );
} 