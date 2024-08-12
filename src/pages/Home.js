import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const projects = [
  {
    id: 1,
    title: "Infographics",
    image: "https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/453908280_502903599058730_5433064406609722753_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE4oR4mk5I6sob1JlxQGtplOXgj1ErzATk5eCPUSvMBOcw8j2G7pc0GQ4m5c6PM43EE8tGrH3A_v4noACIRS5gB&_nc_ohc=R03T1FMIv7MQ7kNvgEm5mx-&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QFCwVcN1CSoet1dAt88xa5w9mh3PKGCTeyBzlwZHBONfQ&oe=66DDAB5D",
  },
  {
    id: 2,
    title: "First Website",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/450371244_845007303948460_6504816679352770785_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFfDBbm7lTmB4wykZHapcQGFsp8Tb0efmQWynxNvR5-ZEePAYp2awPFeklrLMNrekjGa1sgWFgKJTQ9YMPZFuHW&_nc_ohc=AblOXy5_EuoQ7kNvgHg0rpW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFJ4x6BxNrUd2HJuTQvFkEy5L6b72sHpIzKZThiBMg-XA&oe=66DD8CA1",
  },
  {
    id: 3,
    title: "T shirt layout",
    image: "https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/454156073_1509459676326196_940993821324439607_n.png?stp=dst-png_s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGcFXn_YyAVd0ORTcu6N-ZjCyMsa-xx7h8LIyxr7HHuH4fI4GV-fKNUSt_J0C4oAzSfjwxVkaa09omd05mq7jvq&_nc_ohc=1uyDe9eQYCgQ7kNvgFLs7dc&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QHOPe51Wf1yW3e6v7us3RH0ms2hU_g-wnkNsiZySsz8Uw&oe=66DD9597",
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <img 
          src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/449997625_7580947945343232_7133370854915843497_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEILNZOyp5XEjtFgvRNllXKiQr209aYZRqJCvbT1phlGkVaJGynFCjNX-MpkK5TNA7-nKip0mBpqYMHkGLh2t1h&_nc_ohc=ChHzZ0Idtd0Q7kNvgF3CvWp&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QHr7dObhQaL-ZUumo6g3zLgvDL-ohMXwjro19KA6QWPLg&oe=66DD5EB4"
          alt="Profile" 
          className="profile" 
        />
        <h1 style={{ color: 'white' }}>Hello, Welcome to my Personal Portfolio</h1>
        <h2 className="display-4">I am Roger R. Toquero Jr.</h2>
        <p className="lead">Showcasing my skills, projects, and experiences.</p>
      </div>

      <section id="projects" className="container my-5">
        <h2 className="mb-4 text-white">Featured Projects</h2>
        <div className="card mb-4 project-card">
          <img src={projects[currentIndex].image} className="card-img-top" alt={projects[currentIndex].title} />
          <div className="card-body">
            <h5 className="card-title text-white">{projects[currentIndex].title}</h5>
            <Link to="/projects" className="btn btn-primary">View Project</Link>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
