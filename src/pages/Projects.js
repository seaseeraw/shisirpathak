
import React from "react";
import "../App.css";

const projects = [
  { title: "Project One", description: "A cool project using React.", img: "https://via.placeholder.com/150" },
  { title: "Project Two", description: "An amazing project with Node.js.", img: "https://via.placeholder.com/150" },
  { title: "Project Three", description: "A fantastic full-stack application.", img: "https://via.placeholder.com/150" },
];

const Projects = () => {
  return (
    <div className="fancy-page">
      <h2 className="fancy-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

