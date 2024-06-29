
import React from "react";

interface PdfViewerProps {
  resumeLink: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ resumeLink }) => {
  return (
    <div className="pdf-container w-full h-full flex justify-center items-center">
      <iframe
        src={resumeLink}
        style={{ minHeight: "100vh" }}
        className="w-full h-full border-none"
      />
    </div>
  );
};

export default PdfViewer;
