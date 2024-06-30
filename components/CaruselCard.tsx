import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

export const CaruselCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgUrl,
}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="proj-imgbx shadow-lg rounded-lg overflow-hidden">
        <img src={imgUrl} alt={title} className="w-full" />
        <div className="proj-txtx p-4 bg-white">
          <h4 className="text-xl font-bold">{title}</h4>
          <span className="text-gray-600">{description}</span>
        </div>
      </div>
    </div>
  );
};
