// ImageViewer.tsx
import React from "react";

interface ImageViewerProps {
  imageLink: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageLink }) => {
  return (
    <div className="image-container w-full h-full flex justify-center items-center">
      <img
        src={imageLink}
        alt="Resume Image"
        className="max-w-full h-auto border-none"
        style={{ maxHeight: "100vh" }} // Ensure the image is never taller than the viewport
      />
    </div>
  );
};

export default ImageViewer;
