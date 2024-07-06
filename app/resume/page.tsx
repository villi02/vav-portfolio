"use client";
import React, { useState } from "react";
import PdfViewer from "@/components/PdfViewer";

const Page: React.FC = () => {
  const resumeLinks: { [key: string]: string } = {
    nonTechnical: "/NT_resume.pdf",
    technical: "/NT_resume.pdf",
  };

  const [activeResume, setActiveResume] = useState("nonTechnical");

  const getButtonClass = (name: string) => {
    return `py-2 px-4 rounded-full transition-all duration-300 ease-in-out ${
      activeResume === name
        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
        : "bg-transparent text-white hover:bg-white hover:text-black border border-white"
    }`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        My <strong className="text-purple-500">Resume</strong>
      </h1>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => {
            setActiveResume("nonTechnical");
          }}
          className={getButtonClass("nonTechnical")}
        >
          Non-Technical
        </button>
        <button
          onClick={() => {
            setActiveResume("technical");
          }}
          className={getButtonClass("technical")}
        >
          Technical
        </button>
      </div>
      <PdfViewer resumeLink={resumeLinks[activeResume]} />
    </div>
  );
};

export default Page;
