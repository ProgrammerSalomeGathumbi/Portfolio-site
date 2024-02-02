import React from 'react';
import Project from './Project';
import './ProjectSection.css';

const ProjectSection = () => {
  return (
    <section>
      <div className="project-head">
         <h2>Projects</h2>
      </div>
      <div className="projects-container">
        <Project
          title="E-commerce Project"
          site="https://youtu.be/UFIUfP03V6E"
          code="https://github.com/ProgrammerSalomeGathumbi/TrendyThreads-E-commerce/"
          imagesrc="/images/ecommerce image.jpg"
        />
        <Project
          title="Advice Generator"
          site="https://advice-app-generator-frontend-mentor.vercel.app/"
          code="https://github.com/ProgrammerSalomeGathumbi/Advice-App-Generator-Frontend-Mentor/"
          imagesrc="/images/advice image.jpg" 
        />
        <Project
          title="Signup Page"
          site="https://green-signup-page.vercel.app/"
          code="https://github.com/ProgrammerSalomeGathumbi/Green-Signup-Page/"
          imagesrc="/images/tree image.jpg"
        />
      </div>
    </section>
  );
};

export default ProjectSection;
