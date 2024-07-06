"use client";
import React, { Suspense } from "react";
import Banner from "@/components/Banner";
import ProjectCarusel from "@/components/ProjectCarusel";
import { SearchSection } from "@/components/SearchSection";

const Page: React.FC = () => {
  return (
    <React.StrictMode>
      <div>
        <Banner />
        <Suspense fallback={<div>Loading...</div>}>
          <SearchSection />
        </Suspense>
        <ProjectCarusel />
      </div>
    </React.StrictMode>
  );
};

export default Page;
