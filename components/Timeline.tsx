// components/Timeline.tsx
import React, { useEffect, useRef } from "react";

interface Milestone {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const milestones: Milestone[] = [
  {
    date: "2021-08-01",
    title: "Started University",
    description:
      "Began my M.Sc degrees in Computer Science and Mathematics at NTNU.",
    image: "https://via.placeholder.com/150",
  },
  {
    date: "2021-08-01",
    title: "Key Account Manager at Propulse NTNU",
    description:
      "Secured funding and partnerships for the student rocketry team.",
  },
  {
    date: "2022-02-01",
    title: "Project Lead at Cogito NTNU",
    description:
      "Led AI projects, including pneumonia detection and time series prediction.",
  },
  {
    date: "2022-02-01",
    title: "Software Engineer at Favn Software",
    description:
      "Implemented scalable data pipeline and enhanced security for applications.",
  },
  {
    date: "2022-02-01",
    title: "3rd Place at NASA JPL Hackathon",
    description:
      "Achieved 3rd place in a hackathon hosted by Start NTNU and NASA JPL.",
  },
  {
    date: "2023-07-01",
    title: "AI Research Assistant at NorwAI",
    description:
      "Contributed to AI research, paper writing, and optimized dataset processing.",
    image: "https://via.placeholder.com/150",
  },
  {
    date: "2023-09-01",
    title: "Finalist at HackMIT 2023",
    description: "Reached the finals in HackMIT 2023 competition.",
  },
  {
    date: "2023-10-01",
    title: "Chief Investment Officer at Høiskolens Chemikerforening",
    description: "Founded and managed an endowment, handling investments.",
  },
  {
    date: "2024-02-01",
    title: "2nd Place in ABB Group Hackathon",
    description:
      "Secured 2nd place in a hackathon organized by ABB Group and NTNU IE-faculty.",
  },
  {
    date: "2024-03-01",
    title: "Co-founder at A* Consulting",
    description:
      "Featured in Adresseavisa, secured first three customers within a month.",
    image: "https://via.placeholder.com/150",
  },
  {
    date: "2024-07-01",
    title: "Graduation",
    description:
      "Expected completion of M.Sc degrees in Computer Science and Mathematics.",
  },
];
const Timeline: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (elementsRef.current) {
      elementsRef.current.forEach((el) => {
        if (el) observer.observe(el);
      });
    }

    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        My <strong className="text-purple-500">Timeline</strong>
      </h1>
      <p className="mb-8">My personal milestones and highlights</p>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              elementsRef.current[index] = el;
            }}
            className="mb-8 flex w-full items-center opacity-0 transition-opacity duration-1000"
          >
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="text-right">
                    <h3 className="text-lg font-bold text-white">
                      {milestone.title}
                    </h3>
                    <time className="block text-sm font-normal text-gray-400">
                      {milestone.date}
                    </time>
                    <p className="text-base font-normal text-gray-500">
                      {milestone.description}
                    </p>
                    {milestone.image && (
                      <div className="mt-2 flex justify-center">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-1/2"></div>
              </>
            ) : (
              <>
                <div className="w-1/2"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white">
                      {milestone.title}
                    </h3>
                    <time className="block text-sm font-normal text-gray-400">
                      {milestone.date}
                    </time>
                    <p className="text-base font-normal text-gray-500">
                      {milestone.description}
                    </p>
                    {milestone.image && (
                      <div className="mt-2 flex justify-center">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
