// pages/projects.tsx

import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Project One",
    image: "/images/project1.jpg",
    description: "This is a description for project one.",
    githubLink: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    image: "/images/project2.jpg",
    description: "This is a description for project two.",
    githubLink: "https://github.com/yourusername/project-two",
  },
  // Add more projects as needed
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
