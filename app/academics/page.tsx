// pages/academics.tsx

import React from "react";
import Academics from "@/components/Academics";

const csCourses = [
    { title: 'Introduction to Analog and Digital Electronics', code: 'TTT4203', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TTT4203#tab=omEmnet'},
    { title: 'Operating Systems', code: 'IDATT2202', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/IDATT2202/2023#tab=omEmnet'},
    { title: 'Machine Learning - Tabular data prediction', code: 'TDT4173', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TDT4173#tab=omEmnet'},
    { title: 'Algorithms and Data Structures - C++', code: 'IDATT2101', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/IDATT2101#tab=omEmnet', ghLink: 'https://github.com/villi02/IDATT2101_Algorithms_and_Datastructures_Fall2022'},
    { title: 'Databases - MySQL', code: 'TDT4145', program: 'cs', weburl: 'https://www.ntnu.edu/studies/courses/TDT4145#tab=omEmnet'},
    { title: 'Software Engineering - Java', code: 'IDATT1002', program: 'cs', weburl: 'https://www.ntnu.edu/studies/courses/IDATT1002#tab=omEmnet', ghLink: 'https://github.com/villi02/IDATT1002_Systemutvikling_Final_Project_S2022'},
    { title: 'Programming 2 - Java', code: 'IDATT2001', program: 'cs', weburl: 'https://www.ntnu.edu/studies/courses/IDATT2001#tab=omEmnet', ghLink: 'https://github.com/villi02/Wargames'},
    { title: 'Programming 1 - Java', code: 'IDATT1001', program: 'cs', weburl: 'https://www.ntnu.edu/studies/courses/IDATT1001#tab=omEmnet', ghLink: 'https://github.com/villi02/IDATT1001_Programmering-1_H2021'},
    { title: 'Human-Computer Interaction', code: 'TDT4180', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TDT4180#tab=omEmnet'},
];

const mathCourses = [
    { title: 'Introduction to Scientific Computation', code: 'TMA4320', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TMA4320#tab=omEmnet', ghLink: "https://github.com/villi02/TMA4320-Introduksjon-til-vitenskapelige-beregninger-prosjekter/tree/main"},
    { title: 'Mathematics 4K - Complex analysis, differential equations and Fourier analysis', code: 'TMA4120', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TMA4120#tab=omEmnet'},
    { title: 'Mathematics 3 - Linear algebra', code: 'TMA4115', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TMA4115#tab=omEmnet'},
    { title: 'Mathematics 2 - Multivariable calculus and vector analysis', code: 'TMA4105', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TMA4105#tab=omEmnet'},
    { title: 'Mathematics 1 - Single variable calculus', code: 'IMAT1001', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TMA4100#tab=omEmnet'},
    { title: 'Discrete Mathematics', code: 'TMA4140', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TMA4140#tab=omEmnet'},
    { title: 'Statistics', code: 'ISTT1003', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/ISTT1003#tab=omEmnet'},
];

const physicsCourses = [
    { title: 'Optics', code: 'TFY4195', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TFY4195#tab=omEmnet'},
    { title: 'Introduction to Quantum Physics', code: 'TFY4215', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TFY4215#tab=omEmnet'},
    { title: 'Physics', code: 'TFY4125', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TFY4125#tab=omEmnet', ghLink: 'https://github.com/paul673/Fysikklab'},
    { title: 'Wave Physics and Fluid Mechanics', code: 'TFY4163', program: 'mathphysics', weburl: 'https://www.ntnu.edu/studies/courses/TFY4163#tab=omEmnet', ghLink: 'https://github.com/villi02/TFY4163-Bolgefysikk-og-fluidmekanikk'},
    { title: 'Electricity and Magnetism', code: 'FY1003', program: 'mathphysics', weburl: 'https://www.ntnu.no/studier/emner/FY1003/2022#tab=omEmnet', ghLink: 'https://github.com/villi02/FY1003_Electricity_and_Magnetism'},
    { title: 'Space Technology I', code: 'TTT4234', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TTT4234#tab=omEmnet', ghLink: ''},
    { title: 'Space Technology II', code: 'TTT4235', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TTT4235#tab=omEmnet', ghLink: ''},
];

const AcademicsPage: React.FC = () => {
  return (
    <Academics
      csCourses={csCourses}
      mathCourses={mathCourses}
      physicsCourses={physicsCourses}
    />
  );
};

export default AcademicsPage;
