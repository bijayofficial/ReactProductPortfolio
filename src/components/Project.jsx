import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

const Project = () => {
  //   const arr = ["heelo", "Hi", "Bi"];
  return (
    // <div>
    //   {arr.map((ele) => (
    //     <ProjectCard text={ele} />
    //   ))}

    // </div>

    <section className="grid grid-cols-3 gap-5 pb-6">
      {projects.map((project) => (
        <ProjectCard
          title={project.title}
          date={project.date}
          image={project.image}
        />
      ))}
    </section>
  );
};

export default Project;
