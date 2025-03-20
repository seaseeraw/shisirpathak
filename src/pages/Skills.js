// src/pages/Skills.js
// import React from "react";
// import "../App.css";

// const Skills = () => {
//   return (
//     <div className="skills-container">
//       <h2 className="skills-heading">My Skills</h2>
      
//       <div className="skill-category">
//         <h3>Frontend Development</h3>
//         <div className="skill-item">
//           <span>HTML</span>
//           <div className="progress-bar">
//             <div className="progress-bar-fill html"></div>
//           </div>
//         </div>
//         <div className="skill-item">
//           <span>CSS</span>
//           <div className="progress-bar">
//             <div className="progress-bar-fill css"></div>
//           </div>
//         </div>
//         <div className="skill-item">
//           <span>JavaScript</span>
//           <div className="progress-bar">
//             <div className="progress-bar-fill js"></div>
//           </div>
//         </div>
//       </div>

//       <div className="skill-category">
//         <h3>Backend Development</h3>
//         <div className="skill-item">
//           <span>Node.js</span>
//           <div className="progress-bar">
//             <div className="progress-bar-fill node"></div>
//           </div>
//         </div>
//         <div className="skill-item">
//           <span>Express</span>
//           <div className="progress-bar">
//             <div className="progress-bar-fill express"></div>
//           </div>
//         </div>
//         <div className="skill-item">
//           <span>MongoDB</span>
//           <div className="progress-bar">
//             <div className="progress-bar-fill mongodb"></div>
//           </div>
//         </div>
//       </div>

//       <div className="skill-category">
//         <h3>Tools & Technologies</h3>
//         <div className="skill-item">
//           <span>Git</span>
//           <div className="progress-bar">
//             <div className="progress-bar-fill git"></div>
//           </div>
//         </div>
//         <div className="skill-item">
//           <span>Docker</span>
//           <div className="progress-bar">
//             <div className="progress-bar-fill docker"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


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

