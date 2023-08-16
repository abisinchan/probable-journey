import React from 'react';
import '../css/Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: 'Rhythm Review',
      imageUrl: 'project1.jpg',
      deployedLink: 'https://agile-springs-19422-e0a9573c7a30.herokuapp.com/',
      githubLink: 'https://github.com/delantetr/literate-guacamole',
    },
    {
        title: 'How R U Feeling',
        imageUrl: 'project1.jpg',
        deployedLink: 'https://abisinchan.github.io/verbose-potato/',
        githubLink: 'https://github.com/abisinchan/verbose-potato',
      },
      {
        title: 'Note Taker',
        imageUrl: 'project1.jpg',
        deployedLink: 'https://aqueous-taiga-53591-4655247aa37e.herokuapp.com/notes',
        githubLink: 'https://github.com/abisinchan/crispy-octo-robot',
      },
      {
        title: 'Weather DashBoard',
        imageUrl: 'project1.jpg',
        deployedLink: 'https://abisinchan.github.io/animated-succotash/',
        githubLink: 'https://github.com/abisinchan/animated-succotash',
      },
      {
        title: 'Work Day Schedular',
        imageUrl: 'project1.jpg',
        deployedLink: 'https://abisinchan.github.io/symmetrical-meme/',
        githubLink: 'https://github.com/abisinchan/symmetrical-meme',
      },
      {
        title: 'Quiz Master',
        imageUrl: 'project1.jpg',
        deployedLink: 'https://abisinchan.github.io/ideal-barnacle/',
        githubLink: 'https://github.com/abisinchan/ideal-barnacle',
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
