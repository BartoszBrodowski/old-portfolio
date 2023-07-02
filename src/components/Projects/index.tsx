import { useState } from "react";
import ProjectCard from "./ProjectCard";
import GalacticRebornCard from "./GalacticRebornCard";
import clsx from "clsx";

const durationTime = 0.6;

const Projects = () => {
  const [clickedId, setClickedId] = useState(-1);
  const techStackImages = {
    neo4j: "src/assets/images/Neo4j.svg",
    javascript: "src/assets/images/JavaScript.svg",
    express: "src/assets/images/ExpressJS.svg",
    java: "src/assets/images/Java.svg",
    jwt: "src/assets/images/JWT.svg",
    typescript: "src/assets/images/TypeScript.svg",
    nextjs: "src/assets/images/NextJS.svg",
    tailwindcss: "src/assets/images/TailwindCSS.svg",
  };
  const projects = [
    {
      title: "Neo4j MovieDB API",
      description:
        "MovieDB API project created with ExpressJS and JavaScript. It utilizes JWT to authenticate whether the user is logged in and able to access the data. All the data was stored inside Neo4j graph database.",
      techstack: [
        techStackImages.javascript,
        techStackImages.express,
        techStackImages.jwt,
        techStackImages.neo4j,
      ],
      link: "https://github.com/BartoszBrodowski/neo4j-moviedb-api",
    },
    {
      title: "Galactic Reborn",
      description:
        "Landing page of a blockchain game project. It was created with NextJS and TailwindCSS. The site contains information about documentation, roadmap of the project, team section and community links.",
      techstack: [
        techStackImages.typescript,
        techStackImages.nextjs,
        techStackImages.tailwindcss,
      ],
      link: "https://galacticreborn.io/",
    },
    {
      title: "Java projects",
      description:
        "Repository of Java projects from university classes. They allowed me to get a solid understanding of topics such as encapsulation, abstract classed, inheritance and rules of proper OOP. After the course I feel very confident in my ability to write clean Java code. (There's not many commits as the work was mostly done at the university and the time was limited).",
      techstack: [techStackImages.java],
      link: "https://github.com/BartoszBrodowski/java-uni.git",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col justify-center items-start gap-8">
      {projects.map((project, index) =>
        project.title === "Galactic Reborn" ? (
          <div
            className={clsx(`min-w-[300px] flex-grow grid-item-${index + 1}`, {
              "z-10 flex justify-center items-center absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2":
                clickedId === index,
            })}
            key={index}
          >
            <GalacticRebornCard
              title={project.title}
              description={project.description}
              link={project.link}
              id={index}
              isClicked={clickedId === index}
              setClickedId={setClickedId}
              clickedId={clickedId}
              techStack={project.techstack}
              animationDurationTime={durationTime}
            />
          </div>
        ) : (
          <div
            className={clsx(`min-w-[300px] flex-grow grid-item-${index + 1}`, {
              "z-20 absolute w-full h-full flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2":
                clickedId === index,
            })}
            key={index}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              id={index}
              isClicked={clickedId === index}
              setClickedId={setClickedId}
              clickedId={clickedId}
              techStack={project.techstack}
              animationDurationTime={durationTime}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
