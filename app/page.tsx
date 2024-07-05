"use client";
import React from "react";
import Banner from "@/components/Banner";
import ProjectCarusel from "@/components/ProjectCarusel";
import { SearchSection } from "@/components/SearchSection";

const Page: React.FC = () => {
  return (
    <React.StrictMode>
      <div>
        <Banner />
        <SearchSection />
        <ProjectCarusel />
      </div>
    </React.StrictMode>
  );
};

export default Page;
