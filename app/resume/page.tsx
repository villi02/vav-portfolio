import React from "react";
import PdfViewer from "@/components/PdfViewer";

const ResumePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <PdfViewer />
    </div>
  );
};

export default ResumePage;
