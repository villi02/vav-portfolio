"use client";
import React, { useState } from "react";
import ResponsiveViewer from "@/components/ResponsiveViewer";

const Page: React.FC = () => {
  const resumeLinkPdf = "VilhjalmurArnarVilhjalmsson-CV-Feb25.pdf";
  const resumeLinkImg = "VilhjalmurArnarVilhjalmsson-CV-Feb25.png";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        My <strong className="text-purple-500">Resume</strong>
      </h1>
      <ResponsiveViewer imgLink={resumeLinkImg} pdfLink={resumeLinkPdf} />
    </div>
  );
};

export default Page;
