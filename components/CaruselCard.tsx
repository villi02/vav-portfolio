// CaruselCard.tsx
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
      <div className="relative overflow-hidden shadow-lg rounded-lg mb-6 group">
        <img
          src={imgUrl}
          alt={title}
          className="w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        />
        {/* Adjust opacity to 0 by default and 100 on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="text-center text-white">
            <h4 className="text-2xl font-bold">{title}</h4>
            <span className="italic font-normal text-sm">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
