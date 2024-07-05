// pages/projects.tsx
"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Simulating Polymer Dynamics with Monte Carlo",
    image: "/projects/biophysics_polymer_simulation.png",
    description:
      "This project involves the simulation of polymer chains to study their physical properties and behavior under various conditions. Also includes a focus on runtime and achieving computation efficiency. This is one of 3 projects in the course TMA4320 - Introduction to scientific computing and was taken in spring of 2024.",
    githubLink:
      "https://github.com/villi02/TMA4320-Introduksjon-til-vitenskapelige-beregninger-prosjekter/tree/main/Prosjekt1-BioFysikk",
    tags: ["Python", "Numpy", "Matplotlib"],
  },
  {
    title: "Creating a Transformer from Scratch",
    image: "/projects/industrial_mathematics_transformer.png",
    description:
      "An implementation of a Transformer neural network from scratch, focusing on the underlying mathematical principles and efficient computation. The transformer is programmed exclusively using numpy, no deep learning libraries are used, emphasizing the focus on the mathematical side of transformers. This is one of 3 projects in the course TMA4320 - Introduction to scientific computing and was taken in spring of 2024.",
    githubLink:
      "https://github.com/villi02/TMA4320-Introduksjon-til-vitenskapelige-beregninger-prosjekter/tree/main/Prosjekt2-IndustriellMatematikk",
    tags: ["Python", "Numpy", "Matplotlib"],
  },
  {
    title: "Modeling Sea Debris Trajectories",
    image: "/projects/technical_physics_sea_debris.png",
    description:
      "This project models the trajectories of sea debris based on meteorological data, predicting where debris will float. The main method for numerically approximating the trajectory of the ocean debris is the application of Heun's method. This is one of 3 projects in the course TMA4320 - Introduction to scientific computing and was taken in spring of 2024.",
    githubLink:
      "https://github.com/villi02/TMA4320-Introduksjon-til-vitenskapelige-beregninger-prosjekter/tree/main/Prosjekt3-TekniskFysikk",
    tags: ["Python", "Numpy", "scipy", "xarray", "cartopy"],
  },
  {
    title: "HackMIT 2023 - Rythm AI",
    image: "/projects/rythm.png",
    description:
      "AI-driven platform that echoes the nuance of a personal trainer's feedback, making every workout feel even more personalized and rewarding. Either upload your .gpx file manually through the upload button, or sync it with your Strava account and Rhythm will generate the comments for your most recent workouts",
    githubLink: "https://github.com/erikbohne/hackmit-23",
    tags: ["Python", "OpenAI", "Flask", "TerraAPI", "Firebase"],
  },
  {
    title: "Doctor AI",
    image: "/projects/doctoraiphoto.png",
    description:
      "Leveraged Deep Learning Computer Vision models to detect Pneumonia in X-Ray imagery, using both fine-tuning of existing Computer Vision models from PyTorch, as well as Convolutional Neural Network",
    githubLink: "https://github.com/CogitoNTNU/Doctor-AI",
    tags: ["Python", "Tensorflow", "Keras", "PyTorch"],
  },
  {
    title: "Dividend Diary",
    image: "/projects/dividendapp.png",
    description:
      "An IOS app built for tracking dividend-oriented portfolios. The app is built with Swift for the frontend, firebase for backend, and FinancialModelingPrep API for live stock data. Built as the final project for CS50x, an online course taught by Harvard University",
    githubLink:
      "https://github.com/villi02/CS50x/tree/main/Final%20project/DivDiary",
    tags: ["Swift", "Firebase", "SwiftUI", "FinancialModelingPrep API"],
  },
  {
    title: "Time Series AI Stock Predictor",
    image: "/projects/stockimg.jpeg",
    description:
      "A project where I served as project lead for Cogito NTNU, a student organization, revolving around using AI to predict the stock prices of the Oslo Stock Exchange. Inspired by renaissance technologies, we used out-of-market data in combination with mathematics and advanced algorithms to predict if the stock would go up or down the following day. There were two main models for the project, one LSTM and a random forest classifier.",
    githubLink: "https://github.com/CogitoNTNU/Stockbot",
    tags: ["Python", "Tensorflow", "Keras", "Pandas", "yahoo Finance API"],
  },
  {
    title: "Meme AI",
    image: "/projects/memegenimg.jpeg",
    description:
      "Used an LSTM model to try to make funny one-liners. Used code/ai-model from a Stanford research project to make an application that inserted meme text onto an image to make a meme out of any picture.",
    githubLink: "https://github.com/CogitoNTNU/memeAI",
    tags: ["Python", "Tensorflow", "Keras", "Pandas"],
  },
  {
    title: "Portfolio-website",
    image: "/projects/websitepic.png",
    description:
      "My personal portfolio website (this website). Written in JavaScript and CSS, using React, Bootstrap, and MaterialUI.",
    githubLink: "https://github.com/villi02/personal-portfolio-website",
    tags: ["JavaScript", "CSS", "React", "react-bootstrap", "MaterialUI"],
  },
  {
    title: "Wargames",
    image: "/projects/runeescape.png",
    description:
      "A war simulator game, allowing players to create armies from predefined soldier classes. My solution for the project known as 'Wargames' for the subject IDATT2001 at NTNU",
    githubLink: "https://github.com/villi02/Wargames",
    tags: ["Java", "CSS", "javaFX"],
  },
  {
    title: "Tournament Creator App",
    image: "/projects/tecnico.png",
    description:
      "The tournament creator app is an app made to help structure and make e-sport tournaments. In the app, it is possible to add teams and players in the teams. When this is done you can create a tournament with the teams of your choice from a range of 2 to 16 total teams. The app also has a view-only mode for people to keep up with the tournament.",
    githubLink:
      "https://github.com/villi02/IDATT1002_Systemutvikling_Final_Project_S2022",
    tags: ["Java", "CSS", "SQLite", "javaFX"],
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        My <strong className="text-purple-500">Projects</strong>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            githubLink={project.githubLink}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
