// components/Timeline.tsx
import React, { useEffect, useRef, useState } from "react";

interface Milestone {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const professionalMilestones: Milestone[] = [
  {
    date: "2016",
    title: "Started my first company",
    description:
      "Served as the CFO and co-founder of a startup focused on selling iced tea; we sold our products in the school cafeteria. The company was called Fresh Ice Tea",
  },

  {
    date: "2019",
    title: "2nd Prize Chinese Bridge Competition in Norway",
    description:
      "Competed in the Chinese Bridge Competition in the High School student class. Received 2nd prize for giving a speech in Chinese and performing a Chinese play as my talent portion.",
    image: "/timeline/chineseBridge.jpeg",
  },

  {
    date: "2020",
    title: "3nd Prize Chinese Bridge Competition in Norway",
    description:
      "Competed in the Chinese Bridge Competition in the High School student class. Received 3rd prize for giving a speech in Chinese, the competition was held virtually and without a talent portion due to covid.",
  },

  {
    date: "2020",
    title: "Started my second company",
    description:
      "Served as the CFO and co-founder of a startup with an app centered around sustainability.",
    image: "/timeline/enkle_grep.png",
  },

  {
    date: "2020-2021",
    title: "Completed CS50x during my last year of high school",
    description:
      "Completed the Harvard University CS50x course, an introduction to computer science, during my last year of high school.",
    image:
      "/timeline/CS50x.png",
  },

  {
    date: "2021-08-01",
    title: "Started University",
    description:
      "Began my M.Sc degrees in Computer Science and Mathematics at NTNU.",
    image: "https://via.placeholder.com/150",
  },
  {
    date: "2021-08-01",
    title: "3rd overall at Spaceport America cup",
    description:
      "Placed 3rd overall in the Spaceport America cup, the world's largest intercollegiate rocket engineering competition. My role was securing funding and partnerships.",
    image: "/timeline/Propulse.JPG",
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
      "Started working part-time during the semester and full-time during the summer",
    image: "/timeline/favn_job.jpeg",
  },
  {
    date: "2022-02-01",
    title: "3rd Place at NASA JPL Hackathon",
    description:
      "During my first year, I achieved 3rd place in a hackathon hosted by Start NTNU and NASA JPL. The competition was originally intended for third-year students and above.",
    image: "/timeline/nasa_hackathon.jpeg",
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
    description: "Traveled to MIT to attend HackMIT 2023.",
    image: "/timeline/HackMITTeam.jpeg",
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
    image: "/timeline/ABB_hackathon.jpeg",
  },
  {
    date: "2024-03-01",
    title: "Co-founder and Technical officer at A* Consulting",
    description:
      "Featured on the front page of Adresseavisa, secured first three customers within a month.",
    image: "/timeline/AstarNews.png",
  },
  {
    date: "2027-07-01",
    title: "Graduation",
    description:
      "Expected completion of M.Sc degrees in Computer Science and Mathematics.",
  },
];

const funMilestones: Milestone[] = [
  {
    date: "2018",
    title: "Hosted High School Prom",
    description:
      "Served on the committee to orchestrate the middle school prom, also hosted the event, including having the main speech.",
    image: "/timeline/hostMiddleSchool.jpg",
  },

  {
    date: "2019",
    title: "Learned to do backflips on the ground",
    description:
      "Taught myself to do backflips in my backyard. NB I stopped doing this in 2021",
    image: "/timeline/Backflip.jpg",
  },

  {
    date: "2019",
    title: "Earned my diver’s certificate",
    description: "Earned my diver’s certificate, Padi Open Water Diver",
    image: "/timeline/Diving.jpeg",
  },

  {
    date: "2020",
    title: "Top Gear-like race to Nordkapp",
    description: "Raced to Nordkapp with friends in a Top Gear-like adventure.",
    image: "/timeline/north_cape.JPG",
  },

  {
    date: "2021",
    title: "Hosted High School Graduation",
    description: "Co-Hosted the high school graduation ceremony.",
    image: "/timeline/hostHighSchool.JPG",
  },

  {
    date: "2021",
    title: "Volunteered at UKA 21",
    description:
      "Volunteered as a waiter for UKA 21, the largest cultural festival in Norway.",
    image: "/timeline/uka21.JPG",
  },

  {
    date: "2022",
    title: "Launched a Rocket at Andøya Space Center",
    description:
      "Volunteered as a waiter for UKA 21, the largest cultural festival in Norway.",
    image: "/timeline/andoyaLaunch.jpeg",
  },

  {
    date: "2023",
    title: "Earned my Climbing Certificate",
    description:
      "Earned my climbing certificate, allowing me to climb in Norway.",
    image: "/timeline/climbing.jpeg",
  },
];

// make the arrays reverse chronological
professionalMilestones.reverse();
funMilestones.reverse();

const Timeline: React.FC = () => {
  const [selectedTimeline, setSelectedTimeline] = useState<
    "professional" | "fun"
  >("professional");
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
  }, [selectedTimeline]);

  const milestones =
    selectedTimeline === "professional"
      ? professionalMilestones
      : funMilestones;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        My <strong className="text-purple-500">Timeline</strong>
      </h1>
      <p className="mb-8">
        My professional and personal achievements and highlights
      </p>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setSelectedTimeline("professional")}
          className={`mr-4 px-4 py-2 rounded ${
            selectedTimeline === "professional"
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Professional
        </button>
        <button
          onClick={() => setSelectedTimeline("fun")}
          className={`px-4 py-2 rounded ${
            selectedTimeline === "fun"
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Fun
        </button>
      </div>
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
