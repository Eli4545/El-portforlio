'use client'
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';
export default function Contact() {
 

  return (
    <section id="contact" className="bg-white text-gray-900 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>

        <div className="flex flex-col items-center mb-8">
          <p className="text-lg text-center mb-4">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
          <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/Eli4545" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={50}
            />
          </a>
          <a
            href="https://x.com/ElijahSimo89055?s=08"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={50}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/elijah-simon-479770278"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={50}
            />
          </a>
        </div>
      </div>
      
         
      </div>
    </section>
  );
}