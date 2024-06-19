import React from 'react';

const PdfViewer: React.FC = () => {
  return (
    <div className="pdf-container w-full h-screen flex justify-center items-center">
      <iframe
        src="/NT_resume.pdf"
        className="w-full h-full border-none"
      />
    </div>
  );
};

export default PdfViewer;