'use client'
import React from "react"
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="bg-gradient-to-r from-black to-purple-600 text-white h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <Image
          src="/eli.jpg" // Replace with your image path
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full mx-auto"
        />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6">Hi, I'm Eli,a Software Developer</h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl">I specialize in building scalable backend systems.</p>
      </div>
    </section>
  );
}