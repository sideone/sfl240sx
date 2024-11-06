import React from 'react';

interface DetailedSpecSectionProps {
  title: string;
  items: string[];
}

export function DetailedSpecSection({ title, items }: DetailedSpecSectionProps) {
  return (
    <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
      <h3 className="text-xl font-bold mb-4 text-blue-400">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}