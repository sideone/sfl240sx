import React from 'react';
import { Clock, Wrench, Award, User } from 'lucide-react';

const stats = [
  { icon: Clock, title: "25 Years", subtitle: "Original Owner" },
  { icon: Wrench, title: "600 RWHP", subtitle: "Built KA24DE" },
  { icon: Award, title: "161 MPH", subtitle: "Standing Mile" },
  { icon: User, title: "Miami Native", subtitle: "Community Leader" }
];

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-900 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
          <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
          <p className="text-gray-400">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
}