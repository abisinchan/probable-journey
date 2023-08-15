import React from 'react';
import '../css/Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      imageUrl: 'project1.jpg',
      deployedLink: 'https://project1-demo.com',
      githubLink: 'https://github.com/username/project1',
    },
    {
        title: 'Project 2',
        imageUrl: 'project1.jpg',
        deployedLink: 'https://project1-demo.com',
        githubLink: 'https://github.com/username/project1',
      },
      {
        title: 'Project 3',
        imageUrl: 'project1.jpg',
        deployedLink: 'https://project1-demo.com',
        githubLink: 'https://github.com/username/project1',
      },
      {
        title: 'Project 4',
        imageUrl: 'project1.jpg',
        deployedLink: 'https://project1-demo.com',
        githubLink: 'https://github.com/username/project1',
      },
      {
        title: 'Project 5',
        imageUrl: 'project1.jpg',
        deployedLink: 'https://project1-demo.com',
        githubLink: 'https://github.com/username/project1',
      },
      {
        title: 'Project 6',
        imageUrl: 'project1.jpg',
        deployedLink: 'https://project1-demo.com',
        githubLink: 'https://github.com/username/project1',
      }
  ];

  return (
    <section className="portfolio-section">
    <div className="portfolio-items">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <div className="links">
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              Github Repo
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}

export default Portfolio;
