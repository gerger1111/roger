// src/pages/About.js

import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <img 
        src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.15752-9/454156073_1575617536644735_5340715642020168431_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFWEOrZCeZttUfO-SAYlb_Co41zb_LlKx-jjXNv8uUrH5AA4-B1d-nII2322gtP53gHbi4TVjgqwcEXEgLrw-aM&_nc_ohc=73mwmZMxFSsQ7kNvgEFO2fv&_nc_ht=scontent.fmnl13-1.fna&oh=03_Q7cD1QElDpeYee0y1CqSivab9LainN9hbNvXsezEUddKsmA_YQ&oe=66DDA17E"
        alt="Profile1" 
        className="profile-image1" 
      />
      <div className="about-content">
        <p>
          Hello! I'm <strong>Roger R. Toquero Jr.</strong>, a passionate and dedicated college student currently studying 
          Bachelor of Science in Information Technology (BSIT) at Notre Dame of Kidapawan College (NDKC). 
          Born on January 31, 2004, and raised in Brgy. Kibudoc, Matalam, I'm 20 years old and proud of my roots 
          in Matalam, North Cotabato.
        </p>
        <p>
          I'm skilled at programming, website editing, and picture editing. My journey into the world of 
          programming began with my passion for gaming. I dominate most of the games I play, which fuels my 
          interest in creating and developing digital experiences. 
        </p>
        <p>
          My goal is to leverage my technical skills and gaming background to develop innovative solutions 
          and contribute to exciting projects in the tech industry. I'm always eager to learn new technologies 
          and push my limits to deliver high-quality results.
        </p>
      </div>
    </div>
  );
}

export default About;
