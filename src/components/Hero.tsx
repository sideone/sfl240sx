import React from 'react';
import { Instagram } from 'lucide-react';

export function Hero() {
  return (
    <div 
      className="h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                         url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-carbon opacity-20"></div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Kyle Murphy's
        </h1>
        <h2 className="text-4xl mb-4">1998 Nissan 240sx S14 SE</h2>
        <div className="flex items-center gap-2 text-blue-400">
          <Instagram className="w-6 h-6" />
          <span className="text-xl">@SFL240SX</span>
        </div>
        <p className="mt-4 text-gray-300">Updated As Of Nov 2024</p>
      </div>
    </div>
  );
}