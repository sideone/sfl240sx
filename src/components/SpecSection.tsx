import React from 'react';

interface SpecSectionProps {
  title: string;
  items: string[];
}

export function SpecSection({ title, items }: SpecSectionProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-blue-400">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}