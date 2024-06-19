// components/Timeline.tsx
import React from 'react';

interface Milestone {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const milestones: Milestone[] = [
  {
    date: '2020-01-01',
    title: 'Started University',
    description: 'Began my journey in Computer Science and Mathematics.',
    image: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    date: '2021-06-01',
    title: 'Internship at Tech Company',
    description: 'Worked on developing machine learning algorithms.',
    image: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    date: '2022-09-01',
    title: 'Research Assistant',
    description: 'Conducted research in AI and contributed to academic papers.',
    image: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    date: '2023-06-01',
    title: 'Graduation',
    description: 'Completed my M.Sc degrees in Computer Science and Mathematics.',
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Timeline</h1>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
        {milestones.map((milestone, index) => (
          <div key={index} className="mb-8 flex w-full items-center">
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="text-right">
                    <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                    <time className="block text-sm font-normal text-gray-400">{milestone.date}</time>
                    <p className="text-base font-normal text-gray-500">{milestone.description}</p>
                    {milestone.image && (
                      <div className="mt-2 flex justify-center">
                        <img src={milestone.image} alt={milestone.title} className="rounded-lg shadow-md" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative w-1/2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative w-1/2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center absolute right-1/2 transform translate-x-1/2">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                    <time className="block text-sm font-normal text-gray-400">{milestone.date}</time>
                    <p className="text-base font-normal text-gray-500">{milestone.description}</p>
                    {milestone.image && (
                      <div className="mt-2 flex justify-center">
                        <img src={milestone.image} alt={milestone.title} className="rounded-lg shadow-md" />
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