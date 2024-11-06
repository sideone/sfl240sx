import React from 'react';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { Gallery } from './components/Gallery';
import { SpecSection } from './components/SpecSection';
import { DetailedSpecSection } from './components/DetailedSpecSection';
import { carSpecs } from './data/specs';

// Placeholder for your actual images
const carImages: string[] = [
  // Add your image URLs here
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <QuickStats />
        
        

        {/* Specs Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <SpecSection title="Car Backstory" items={carSpecs.backstory} />
          <SpecSection title="About Me" items={carSpecs.aboutMe} />
          <SpecSection title="Performance Highlights" items={carSpecs.performance} />
          <SpecSection title="Notable Accolades" items={carSpecs.accolades} />
        </div>

        {/* Detailed Specs */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Full Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <DetailedSpecSection title="Engine & Performance" items={carSpecs.engine} />
            <DetailedSpecSection title="Exterior" items={carSpecs.exterior} />
            <DetailedSpecSection title="Interior" items={carSpecs.interior} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DetailedSpecSection title="Wheels & Tires" items={carSpecs.wheels} />
            <DetailedSpecSection title="Drivetrain" items={carSpecs.drivetrain} />
            <DetailedSpecSection title="Awards & Recognition" items={carSpecs.accolades} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;