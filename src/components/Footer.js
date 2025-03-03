
// import React from "react";
// import { Link } from "react-router-dom";
// import "../App.css";

// const Footer = () => {
//   return (
//     <footer className="footer-container">
//       <div className="footer-content">
//         <div className="footer-links">
//           <h3 className="footer-heading">Quick Links</h3>
//           <ul>
//             <li>
//               <Link to="/about" className="footer-link">
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link to="/projects" className="footer-link">
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="footer-link">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="footer-socials">
//           <h3 className="footer-heading">Follow Me</h3>
//           <div className="social-icons">
//             <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="https://github.com" className="social-icon" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-github"></i>
//             </a>
//             <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter"></i>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li>
              <Link to="/about" className="footer-link">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/projects" className="footer-link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-socials">
          <h3 className="footer-heading">Follow Me</h3>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
