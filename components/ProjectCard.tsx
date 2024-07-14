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
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black border border-gray-900 transition duration-300 ease-in-out hover:border-white flex flex-col">
      <Image
        className="w-full"
        src={image}
        alt={title}
        width={400}
        height={200}
        objectFit="cover"
      />
      <div className="flex-1 px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
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
            className="text-white text-2xl hover:text-gray-400 border border-white rounded-full p-2"
            aria-label="GitHub Link"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
