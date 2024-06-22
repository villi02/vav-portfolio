// components/ProjectCard.tsx

import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  githubLink,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <Image
        className="w-full"
        src={image}
        alt={title}
        width={400}
        height={200}
        objectFit="cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={githubLink}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
