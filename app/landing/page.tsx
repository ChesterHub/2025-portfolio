"use client";

import React from 'react'
import TechStackSection from './TechStackSection'; // Import the new component

const LandingSection = () => {
  return (
    <div className="w-full h-full" data-theme="pastel">
      <div
        className="hero min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
        {/* Navigation Bar */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-opacity-50 bg-black text-white">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <nav>
            <a href="#hero" className="mx-2 hover:underline">Hero</a>
            <a href="#tech-stack" className="mx-2 hover:underline">Tech Stack</a>
            <a href="#projects" className="mx-2 hover:underline">Projects</a>
            <a href="#contact" className="mx-2 hover:underline">Contact</a>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Welcome to my personal abode! I am a software engineer with over 7+ years of experience. My passion for code comes when I build applications that leave a lasting impact at a company. When not coding, I am out traveling, eating all the things, and hanging out with loved ones.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <a href="#hero" className="mx-2 hover:underline">Hero</a>
          <a href="#tech-stack" className="mx-2 hover:underline">Tech Stack</a>
          <a href="#projects" className="mx-2 hover:underline">Projects</a>
          <a href="#contact" className="mx-2 hover:underline">Contact</a>
        </nav>
      </div>

      {/* Tech Stack Section */}
      <TechStackSection />
    </div>
  )
}

export default LandingSection
