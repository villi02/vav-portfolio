"use client";
import React from "react";
import PageTitle from "@/components/PageTitle";
import ResponsiveViewer from "@/components/ResponsiveViewer";

const Page: React.FC = () => {
  const resumeLinkPdf = "/VilhjalmurAVilhjalmsson_Oct26.pdf";
  const resumeLinkImg = "/VilhjalmurAVilhjalmsson_Oct26.png";

  return (
    <div className="container mx-auto p-4">
      <PageTitle subject="resume" />
      <ResponsiveViewer imgLink={resumeLinkImg} pdfLink={resumeLinkPdf} />
    </div>
  );
};

export default Page;
