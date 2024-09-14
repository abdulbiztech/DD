import React from "react";
import "./SocialMedia.css";
import instagram from "../assets/img/instagram.png";
import gmail from "../assets/img/gmail.png";

const SocialMedia = () => {
  return (
    <div className="album py-5 bg-dark text-center">
      <div className="container">
        <h2 className="text-white mb-5">Let's Chat</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <a 
              href="https://www.instagram.com/digitaldammish/?igsh=cXM0c3pieG5qNjdp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={instagram} 
                alt="Instagram" 
                className="img-fluid mb-4" 
              />
            </a>
          </div>
          <div className="col-md-3">
            <a 
              href="mailto:admin@digitaldammish.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={gmail} 
                alt="Email" 
                className="img-fluid mb-4" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
