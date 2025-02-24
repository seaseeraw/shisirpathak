
import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div className="fancy-page">
      <h2 className="fancy-heading">Contact Me</h2>
      <form className="fancy-form">
        <input type="text" placeholder="Your Name" className="fancy-input" />
        <input type="email" placeholder="Your Email" className="fancy-input" />
        <textarea placeholder="Your Message" className="fancy-input"></textarea>
        <button type="submit" className="fancy-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
