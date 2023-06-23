import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [clickedId, setClickedId] = useState(-1);
  const projects = [
    {
      title: "Neo4j MovieDB API",
      description: "Testing neo4j moviedb api proejct",
    },
    {
      title: "Guitarshop E-commerce",
      description: "Testing guitarshop e-commerce project",
    },
  ];
  return (
    <div className="flex gap-8">
      {projects.map((project, index) => (
        <div className="min-w-[300px]" key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            id={index}
            isClicked={clickedId === index}
            setClickedId={setClickedId}
            clickedId={clickedId}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
