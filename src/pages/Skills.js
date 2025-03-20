

import React from "react";
import "../App.css";

const skillsData = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React.js", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Git & GitHub", level: "Advanced" },
  { name: "UI/UX Design", level: "Intermediate" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

