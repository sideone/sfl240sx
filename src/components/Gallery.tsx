import React from 'react';

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div className="space-y-8 mb-16">
      <h2 className="text-3xl font-bold text-center text-blue-400">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-900"
          >
            <img 
              src={img} 
              alt={`Car view ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
}