import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white text-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">
          I'm a backend developer with experience in building robust and scalable web applications.
          I have a passion for learning new technologies and improving my skills.
          I enjoy solving complex problems and working on innovative projects.
        </p>
        <h3 className="text-2xl font-bold text-center mb-4">Skills</h3>
        <ul className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <li className="bg-gray-100 p-4 rounded shadow  hover:bg-purple-400 hover:text-white transition-colors duration-300">
            Node.js
          </li>
          <li className="bg-gray-100 p-4 rounded shadow  hover:bg-purple-400 hover:text-white transition-colors duration-300">
            TypeScript
          </li>
          <li className="bg-gray-100 p-4 rounded shadow  hover:bg-purple-400 hover:text-white transition-colors duration-300">
            JavaScript
          </li>
          <li className="bg-gray-100 p-4 rounded shadow  hover:bg-purple-400 hover:text-white transition-colors duration-300">
            Express.js
          </li>
          <li className="bg-gray-100 p-4 rounded shadow hover:bg-purple-400 hover:text-white transition-colors duration-300">
            NestJS
          </li>
          <li className="bg-gray-100 p-4 rounded shadow  hover:bg-purple-400 hover:text-white transition-colors duration-300">
            MongoDB
          </li>
          <li className="bg-gray-100 p-4 rounded shadow  hover:bg-purple-400 hover:text-white transition-colors duration-300">
            Git
          </li>
        </ul>
      </div>
    </section>
  );
}