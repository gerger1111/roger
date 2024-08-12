// src/pages/ProjectDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

const projectData = [
  {
    id: 1,
    title: 'Infographics',
    description: '"This infographic was created to effectively present my course material and demonstrate my skills in infographic editing. It combines visually appealing graphics with informative content, showcasing my ability to communicate complex information in a clear and engaging manner."',
    imageUrl: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/453908280_502903599058730_5433064406609722753_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE4oR4mk5I6sob1JlxQGtplOXgj1ErzATk5eCPUSvMBOcw8j2G7pc0GQ4m5c6PM43EE8tGrH3A_v4noACIRS5gB&_nc_ohc=R03T1FMIv7MQ7kNvgEm5mx-&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QFCwVcN1CSoet1dAt88xa5w9mh3PKGCTeyBzlwZHBONfQ&oe=66DDAB5D',
    imageWidth: '400px', // Set specific width for Project 1
  },
  {
    id: 2,
    title: 'First Website',
    description: 'This is my first website that I created to present to my teacher in hopes of achieving a good grade. It serves as a personal portfolio to showcase my skills, projects, and experiences in programming and web development. Through this project, I aimed to enhance my skills and understanding of website creation while providing an insight into my work and accomplishments.',
    imageUrl: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/450371244_845007303948460_6504816679352770785_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFfDBbm7lTmB4wykZHapcQGFsp8Tb0efmQWynxNvR5-ZEePAYp2awPFeklrLMNrekjGa1sgWFgKJTQ9YMPZFuHW&_nc_ohc=AblOXy5_EuoQ7kNvgHg0rpW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFJ4x6BxNrUd2HJuTQvFkEy5L6b72sHpIzKZThiBMg-XA&oe=66DD8CA1',
    imageWidth: '600px', // Set specific width for Project 2
  },
  {
    id: 3,
    title: 'T shirt layout',
    description: '"This T-shirt layout was designed with the goal of creating unique and appealing apparel that can generate income to support my needs. The design reflects my creativity and passion for fashion, aiming to attract customers who appreciate distinctive styles. Through this project, I not only express my artistic vision but also explore entrepreneurial opportunities in the clothing market."',
    imageUrl: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/454156073_1509459676326196_940993821324439607_n.png?stp=dst-png_s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGcFXn_YyAVd0ORTcu6N-ZjCyMsa-xx7h8LIyxr7HHuH4fI4GV-fKNUSt_J0C4oAzSfjwxVkaa09omd05mq7jvq&_nc_ohc=1uyDe9eQYCgQ7kNvgFLs7dc&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QHOPe51Wf1yW3e6v7us3RH0ms2hU_g-wnkNsiZySsz8Uw&oe=66DD9597',
    imageWidth: '500px', // Set specific width for Project 3
  },
];

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // Add useNavigate for navigation
  const project = projectData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-detail-container">
      <h2>{project.title}</h2>
      <div className="project-image-container">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="project-image" 
          style={{ width: project.imageWidth, height: 'auto' }} // Use the width defined in the project data
        />
      </div>
      <p>{project.description}</p>
      {/* Add return button here */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/projects')} className="btn btn-secondary">Return to Projects</button>
      </div>
    </div>
  );
}

export default ProjectDetail;
