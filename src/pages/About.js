// import React from "react";
// import "../App.css";
// import my from "../assets/my.jpeg"; // Replace with your actual image path

// const About = () => {
//   return (
//     <div className="about-container">
//       <div className="about-content">
//         {/* Left Side - Image */}
//         <div className="about-image">
//           <img src={my} alt="My Profile" />
//         </div>

//         {/* Right Side - Text */}
//         <div className="about-text">
//           <h2>About Me</h2>
//           <p>
//             I am a passionate software developer with experience in **MERN Stack** development. 
//             I enjoy building modern, user-friendly, and high-performance web applications. 
//             My goal is to continuously learn and improve my skills while working on exciting projects.
//           </p>
//           <p>
//             I specialize in **React, Node.js, MongoDB, and Express**. 
//             Apart from coding, I love exploring new technologies, contributing to open-source projects, and sharing knowledge.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import "../App.css";
import profileImage from "../assets/my.jpeg"; // Add your image in the assets folder

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate **software developer** with expertise in the **MERN stack**.
            I enjoy building **modern, responsive, and dynamic** applications. 
            My goal is to create engaging user experiences through clean and efficient code.
          </p>
          <p>
            When I'm not coding, I love exploring new technologies, solving challenges, 
            and continuously learning to improve my skills.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
