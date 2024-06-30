import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import biophysics from "../assets/img/projects/biophysics_polymer_simulation.png";
import demostockpic from "../assets/img/StockAppImg/demopic.png";
import podcastPic from "../assets/img/podcastlogo.jpeg";
import vlogpic from "../assets/img/projects/vlogpic.png";
import nordkapppic from "../assets/img/projects/nordkapppic.jpeg";
import bridgecomp from "../assets/img/projects/Chinese_bridge_logo.jpg";
import nasaPic from "../assets/img/projects/NASAlogo.png";
import indmath from "public/projects/industrial_mathematics_transformer.png";

interface Project {
  title: string;
  description: string;
  imgUrl: string;
}

const ProjectCarusel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("first");

  const projects: Project[] = [
    {
      title: "Simulating Polymer Dynamics with Monte Carlo",
      description:
        "Simulating polymer dynamics using Monte Carlo methods, with emphasis on runtime and computation efficiency",
      imgUrl: biophysics,
    },
    {
      title: "Creating a Transformer from Scratch",
      description:
        "A mathematical implementation of a transformer neural network from scratch",
      imgUrl: indmath,
    },
    {
      title: "Stock IOS App",
      description: "IOS App oriented around dividend investing",
      imgUrl: demostockpic,
    },
  ];

  const creativeProjects: Project[] = [
    {
      title: "Podcast on Spotify",
      description: "A podcast where I interview people I find interesting",
      imgUrl: podcastPic,
    },
    {
      title: "Youtube Vlog for parents",
      description:
        "A vlog I made so that my parents can see what I'm up to in college",
      imgUrl: vlogpic,
    },
    {
      title: "Top Grear-like race",
      description:
        "A race from Bergen to Nordkapp, public transport vs private car",
      imgUrl: nordkapppic,
    },
  ];

  const AwardsandHonors: Project[] = [
    {
      title: "2nd - Chinese Bridge Competition Norway",
      description:
        "Consisted of a speech and talent show. My talent show was a play with Philip Alsager.",
      imgUrl: bridgecomp,
    },
    {
      title: "3rd - Chinese Bridge Competition Norway",
      description: "Consisted of a speech only, due to COVID-19",
      imgUrl: bridgecomp,
    },
    {
      title: "3rd - Hackathon with NASA JPL",
      description:
        "Hackathon hosted by Start NTNU at NTNU. Found ways for the EELS-project at JPL to traverse Enceladus - a moon of Saturn. Used software provided by JPL. (ROS, C++, Python)",
      imgUrl: nasaPic,
    },
  ];

  return (
    <section className="relative py-20" id="project">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Projects and Awards</h2>
          <p className="mt-4 text-lg">
            Here is a brief overview of my projects
            <br />
            For more details click on "Projects" on top of the page!
          </p>
        </div>
        <div className="flex justify-center mb-5">
          <button
            className={`mx-2 py-2 px-4 ${
              activeTab === "first"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("first")}
          >
            Programming
          </button>
          <button
            className={`mx-2 py-2 px-4 ${
              activeTab === "second"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("second")}
          >
            Random
          </button>
          <button
            className={`mx-2 py-2 px-4 ${
              activeTab === "third"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("third")}
          >
            Awards
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {activeTab === "first" &&
            projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          {activeTab === "second" &&
            creativeProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          {activeTab === "third" &&
            AwardsandHonors.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
      </div>
      <img
        className="absolute right-0 bottom-0 transform translate-x-1/2 -translate-y-1/2"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};

export default ProjectCarusel;
