import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

const Project = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-6">
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
