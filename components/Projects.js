import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Marb-Store",
      description:
        "Marb-Store is an e-commerce project built with Next.js, Express.js, and MongoDB. Discover the bag that everyone is talking about!",
      link: "https://www.marbstores.com/",
      github: "https://github.com/yourusername/marb-store",
      postman: "https://bold-escape-69107.postman.co/workspace/BLUEHOUSE-TECHNOLOGIES~55bd858d-f7d8-40f2-919d-6422cd0549d6/request/23836494-24453f54-f6ca-4fcc-8c4b-45d2fb98f1ad?action=share&source=copy-link&creator=34565192&ctx=documentation",
    },
    {
      name: "Infinity Gem",
      description: "Infinity Gem is an online learning platform",
      link: "https://ig.bluehouseng.com/",
      github: "https://github.com/https://github.com/bluehouseng/infinity-api-v2",
      postman: "https://bold-escape-69107.postman.co/workspace/BLUEHOUSE-TECHNOLOGIES~55bd858d-f7d8-40f2-919d-6422cd0549d6/folder/14401362-271da345-eaf2-44e1-8e7b-bf821c0bd475?action=share&source=copy-link&creator=34565192&ctx=documentation",
    },
    {
      name: "Rest Api",
      description: "",
      link: "#",
      github: "https://github.com/Eli4545",
      postman: "https://bold-escape-69107.postman.co/workspace/My-Workspace~533daad0-bd5d-4b7b-83e1-ce4272954082/documentation/34565192-a3df17f1-ba0b-413c-8cce-91f26a9b5dc0?entity=folder-99c9a46e-621f-4627-a902-b7a936220aff",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 text-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-200 text-sm sm:text-base mb-4">{project.description}</p>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <a
                  href={project.link}
                  className="text-blue-200 hover:text-blue-400 underline mb-2 sm:mb-0"
                >
                  View Project
                </a>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-blue-200 hover:text-blue-400 underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.postman}
                    className="text-blue-200 hover:text-blue-400 underline"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}