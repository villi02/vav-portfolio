import React from "react";
import Image from "next/image"; // Optimized for Next.js

interface ResponsiveViewerProps {
  pdfLink: string;
  imgLink: string;
}

const ResponsiveViewer: React.FC<ResponsiveViewerProps> = ({
  pdfLink,
  imgLink,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="block md:hidden">
        <p className="text-center mb-2 font-semibold">Viewing Image</p>
        <div className="relative w-full h-auto">
          <img
            src={imgLink}
            alt="Resume Preview"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="hidden md:block">
        <p className="text-center mb-2 font-semibold">Viewing PDF</p>
        <div className="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden">
          <iframe
            src={`${pdfLink}#toolbar=0`} // #toolbar=0 hides some Chrome UI clutter
            className="w-full h-full border-none"
            title="PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveViewer;