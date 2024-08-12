// src/pages/Projects.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // Custom CSS for styling

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Infographics',
      imageUrl: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/453908280_502903599058730_5433064406609722753_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE4oR4mk5I6sob1JlxQGtplOXgj1ErzATk5eCPUSvMBOcw8j2G7pc0GQ4m5c6PM43EE8tGrH3A_v4noACIRS5gB&_nc_ohc=R03T1FMIv7MQ7kNvgEm5mx-&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QFCwVcN1CSoet1dAt88xa5w9mh3PKGCTeyBzlwZHBONfQ&oe=66DDAB5D',
      description: 'A collection of visually compelling infographics showcasing various data points and concepts.',
    },
    {
      id: 2,
      title: 'First Website',
      imageUrl: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/450371244_845007303948460_6504816679352770785_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFfDBbm7lTmB4wykZHapcQGFsp8Tb0efmQWynxNvR5-ZEePAYp2awPFeklrLMNrekjGa1sgWFgKJTQ9YMPZFuHW&_nc_ohc=AblOXy5_EuoQ7kNvgHg0rpW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFJ4x6BxNrUd2HJuTQvFkEy5L6b72sHpIzKZThiBMg-XA&oe=66DD8CA1',
      description: 'The first website I ever created, showcasing my journey into web development.',
    },
    {
      id: 3,
      title: 'T-shirt Layout',
      imageUrl: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/454156073_1509459676326196_940993821324439607_n.png?stp=dst-png_s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGcFXn_YyAVd0ORTcu6N-ZjCyMsa-xx7h8LIyxr7HHuH4fI4GV-fKNUSt_J0C4oAzSfjwxVkaa09omd05mq7jvq&_nc_ohc=1uyDe9eQYCgQ7kNvgFLs7dc&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QHOPe51Wf1yW3e6v7us3RH0ms2hU_g-wnkNsiZySsz8Uw&oe=66DD9597',
      description: 'A custom T-shirt layout design with a creative and modern touch.',
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <Link to={`/projects/${project.id}`}>
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </Link>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
