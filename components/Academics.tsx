import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface Course {
  title: string;
  code: string;
  program: string;
  weburl: string;
  ghLink?: string;
}

interface AcademicsProps {
  csCourses: Course[];
  mathCourses: Course[];
  physicsCourses: Course[];
}

const Academics: React.FC<AcademicsProps> = ({
  csCourses,
  mathCourses,
  physicsCourses,
}) => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          My <strong className="text-purple-500">Courses</strong>
        </h1>
        <p className="mb-8">
          Here are the courses I've taken during University
        </p>
        <p className="mb-8">
          NB : Some courses are not part of my degrees, for various reasons
        </p>
        <div className="flex flex-col space-y-4">
          <Accordion
            className="bg-black border border-gray-900"
            defaultExpanded={true}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon sx={{ color: "white" }} />}
            >
              <Typography className="text-white font-bold text-lg">
                Mathematics Courses
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {mathCourses?.map((course) => (
                <div key={course.code} className="flex justify-between mb-2">
                  <span className="text-white">{course.title}</span>
                  <div>
                    {course.ghLink && (
                      <a
                        className="text-purple-400 hover:underline mr-4"
                        href={course.ghLink}
                      >
                        GitHub
                      </a>
                    )}
                    <a
                      className="text-blue-400 hover:underline"
                      href={course.weburl}
                    >
                      Course page
                    </a>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="bg-black border border-gray-900"
            defaultExpanded={true}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon sx={{ color: "white" }} />}
            >
              <Typography className="text-white font-bold text-lg">
                Physics Courses
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {physicsCourses?.map((course) => (
                <div key={course.code} className="flex justify-between mb-2">
                  <span className="text-white">{course.title}</span>
                  <div>
                    {course.ghLink && (
                      <a
                        className="text-purple-400 hover:underline mr-4"
                        href={course.ghLink}
                      >
                        GitHub
                      </a>
                    )}
                    <a
                      className="text-blue-400 hover:underline"
                      href={course.weburl}
                    >
                      Course page
                    </a>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="bg-black border border-gray-900"
            defaultExpanded={true}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon sx={{ color: "white" }} />}
            >
              <Typography className="text-white font-bold text-lg">
                Computer Science Courses
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {csCourses?.map((course) => (
                <div key={course.code} className="flex justify-between mb-2">
                  <span className="text-white">{course.title}</span>
                  <div>
                    {course.ghLink && (
                      <a
                        className="text-purple-400 hover:underline mr-4"
                        href={course.ghLink}
                      >
                        GitHub
                      </a>
                    )}
                    <a
                      className="text-blue-400 hover:underline"
                      href={course.weburl}
                    >
                      Course page
                    </a>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Academics;
