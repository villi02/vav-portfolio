"use client";
import React, { useState } from "react";
import { CaruselCard } from "./CaruselCard";

interface Project {
  title: string;
  description: string;
  imgUrl: string;
}

// Explicitly type the arrays of projects
const projects: Project[] = [
  {
    title: "Simulating Polymer Dynamics with Monte Carlo",
    description:
      "Simulating polymer dynamics using Monte Carlo methods, with emphasis on runtime and computation efficiency",
    imgUrl: "projects/biophysics_polymer_simulation.png",
  },
  {
    title: "Creating a Transformer from Scratch",
    description:
      "A mathematical implementation of a transformer neural network from scratch",
    imgUrl: "projects/industrial_mathematics_transformer.png",
  },
  {
    title: "Stock IOS App",
    description: "IOS App oriented around dividend investing",
    imgUrl: "projects/dividendapp.png",
  },
];

const creativeProjects: Project[] = [
  {
    title: "Podcast on Spotify",
    description: "A podcast where I interview people I find interesting",
    imgUrl: "/other/podcastlogo.jpeg",
  },
  {
    title: "Youtube Vlog for parents",
    description:
      "A vlog I made so that my parents can see what I'm up to in college",
    imgUrl: "other/vlogpic.png",
  },
  {
    title: "Top Grear-like race",
    description:
      "A race from Bergen to Nordkapp, public transport vs private car",
    imgUrl: "/timeline/northCape.png",
  },
];

const AwardsandHonors: Project[] = [
  {
    title: "2nd - Chinese Bridge Competition Norway",
    description:
      "Consisted of a speech and talent show. My talent show was a play with Philip Alsager.",
    imgUrl: "projects/Chinese_bridge_logo.jpg",
  },
  {
    title: "3rd - Chinese Bridge Competition Norway",
    description: "Consisted of a speech only, due to COVID-19",
    imgUrl: "/projects/Chinese_bridge_logo.jpg",
  },
  {
    title: "3rd - Hackathon with NASA JPL",
    description:
      "Hackathon hosted by Start NTNU at NTNU. Found ways for the EELS-project at JPL to traverse Enceladus - a moon of Saturn. Used software provided by JPL. (ROS, C++, Python)",
    imgUrl: "/projects/NASAlogo.png",
  },
];

const ProjectCarousel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("first");

  return (
    <section className="relative py-20 bg-black text-white" id="project">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Projects and Awards</h2>
          <p className="text-gray-400 text-lg mx-auto leading-relaxed">
            Here is a brief overview of my projects
            <br />
            For more details click on "Projects" on top of the page!
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-5">
          <button
            className={`py-2 px-4 rounded-full transition-all duration-300 ease-in-out ${
              activeTab === "first"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-transparent text-white hover:bg-white hover:text-black border border-white"
            }`}
            onClick={() => setActiveTab("first")}
          >
            Programming
          </button>
          <button
            className={`py-2 px-4 rounded-full transition-all duration-300 ease-in-out ${
              activeTab === "second"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-transparent text-white hover:bg-white hover:text-black border border-white"
            }`}
            onClick={() => setActiveTab("second")}
          >
            Random
          </button>
          <button
            className={`py-2 px-4 rounded-full transition-all duration-300 ease-in-out ${
              activeTab === "third"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-transparent text-white hover:bg-white hover:text-black border border-white"
            }`}
            onClick={() => setActiveTab("third")}
          >
            Awards
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {activeTab === "first" &&
            projects.map((project, index) => (
              <CaruselCard key={index} {...project} />
            ))}
          {activeTab === "second" &&
            creativeProjects.map((project, index) => (
              <CaruselCard key={index} {...project} />
            ))}
          {activeTab === "third" &&
            AwardsandHonors.map((project, index) => (
              <CaruselCard key={index} {...project} />
            ))}
        </div>
      </div>
      <img
        className="absolute right-0 bottom-0 transform translate-x-1/2 -translate-y-1/2 w-1/3"
        src="/other/color-sharp2.png"
        alt="Background"
      />
    </section>
  );
};

export default ProjectCarousel;
