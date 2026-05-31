import React from "react";
import Hero from "../components/Hero.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";

const Home = () => {
  return (
    <main className="px-55">
      <Hero />
      <Project />
      <Contact />
    </main>
  );
};

export default Home;
