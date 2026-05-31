import React from "react";

const ProjectCard = ({ title, date, image }) => {
  return (
    <div className=" flex flex-col h-110 p-6 rounded-xl bg-zinc-200 hover:bg-zinc-100 transition duration-300 ease-in-out">
      <span className="text-lg font-medium">{title}</span>
      <span className="font-light">{date}</span>
      <img src={image} alt={title} className="mt-15" />
    </div>
  );
};

export default ProjectCard;
