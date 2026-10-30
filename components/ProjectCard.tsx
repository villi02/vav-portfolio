import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  githubLink: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  githubLink,
  tags,
}) => {
  return (
    <div className="archive-project-card max-w-sm rounded overflow-hidden shadow-lg bg-black border border-gray-900 flex flex-col">
      <Image
        className="w-full object-cover"
        src={image}
        alt={title}
        width={400}
        height={200}
      />
      <div className="flex-1 px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-5">
        <div className="flex justify-center mb-4 space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 text-xs font-semibold px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href={githubLink}
            className="archive-github-link"
            aria-label={`View ${title} on GitHub`}
          >
            <FaGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
