'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('main');

  const tabs = [
    {
      id: 'main',
      name: 'Main',
      icon: 'https://i.imgur.com/G6aMUah.png',
      href: '/'
    },
    {
      id: 'market',
      name: 'Market',
      icon: 'https://i.imgur.com/QmVe8A9.png',
      href: '/market'
    },
    {
      id: 'gifts',
      name: 'My Gifts',
      icon: 'https://i.imgur.com/G6aMUah.png',
      href: '/gifts'
    },
    {
      id: 'auctions',
      name: 'Auctions',
      icon: 'https://i.imgur.com/QmVe8A9.png',
      href: '/auctions'
    },
    {
      id: 'activity',
      name: 'Activity',
      icon: 'https://i.imgur.com/G6aMUah.png',
      href: '/activity'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={`flex flex-col items-center justify-center w-full h-full ${
                activeTab === tab.id ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="relative w-6 h-6 mb-1">
                <Image
                  src={tab.icon}
                  alt={tab.name}
                  width={24}
                  height={24}
                  className={`w-full h-full object-contain ${
                    activeTab === tab.id ? 'opacity-100' : 'opacity-50'
                  }`}
                />
              </div>
              <span className="text-xs">{tab.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 