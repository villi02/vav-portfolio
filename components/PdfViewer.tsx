import React from "react";

const PdfViewer: React.FC = () => {
  return (
    <div className="pdf-container">
      <iframe
        src="/resume.pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default PdfViewer;
