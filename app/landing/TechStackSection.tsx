"use client";

import React from 'react';

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
        {/* Example Tech Item */}
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-16 h-16 mb-4"
          />
          <p className="text-lg font-medium">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-16 h-16 mb-4"
          />
          <p className="text-lg font-medium">React</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="w-16 h-16 mb-4"
          />
          <p className="text-lg font-medium">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="Tailwind CSS"
            className="w-16 h-16 mb-4"
          />
          <p className="text-lg font-medium">Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
