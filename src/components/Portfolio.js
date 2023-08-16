import React from 'react';
import '../css/Portfolio.css';
import rhythmReviewImg from '../images/rhythmReview.png';
import howRuFeelingImg from '../images/howRUFeeling.png';
import noteTakerImg from '../images/noteTaker.png';
import weatherDashboardImg from '../images/weatherApp.png';
import workDaySchedularImg from '../images/workdaySchedular.png';
import quizMasterImg from '../images/quizMaster.png';

function Portfolio() {
  const projects = [
    {
      title: 'Rhythm Review',
      imageUrl: rhythmReviewImg, 
      deployedLink: 'https://agile-springs-19422-e0a9573c7a30.herokuapp.com/',
      githubLink: 'https://github.com/delantetr/literate-guacamole',
      languages: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'How R U Feeling',
      imageUrl: howRuFeelingImg, 
      deployedLink: 'https://abisinchan.github.io/verbose-potato/',
      githubLink: 'https://github.com/abisinchan/verbose-potato',
      languages: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Note Taker',
      imageUrl: noteTakerImg,
      deployedLink: 'https://aqueous-taiga-53591-4655247aa37e.herokuapp.com/notes',
      githubLink: 'https://github.com/abisinchan/crispy-octo-robot',
      languages: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Weather DashBoard',
      imageUrl: weatherDashboardImg,
      deployedLink: 'https://abisinchan.github.io/animated-succotash/',
      githubLink: 'https://github.com/abisinchan/animated-succotash',
      languages: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Work Day Schedular',
      imageUrl: workDaySchedularImg,
      deployedLink: 'https://abisinchan.github.io/symmetrical-meme/',
      githubLink: 'https://github.com/abisinchan/symmetrical-meme',
      languages: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Quiz Master',
      imageUrl: quizMasterImg,
      deployedLink: 'https://abisinchan.github.io/ideal-barnacle/',
      githubLink: 'https://github.com/abisinchan/ideal-barnacle',
      languages: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    ];
return (
    <section className="portfolio-section">
      <div className="portfolio-items">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              <div className="portfolio-item-hover">
                
                <img src={project.imageUrl} alt={project.title} />
                <div className="languages">
                  {project.languages.map((language, langIndex) => (
                    <span key={langIndex}>{language}</span>
                  ))}
                </div>
              </div>
            </a>
            <div className="links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                Deployed Link
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                Github Repo Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Portfolio;