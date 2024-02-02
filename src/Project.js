import React from 'react';


const Project = ({ title, site, code, imagesrc }) => {
  return (
    <div className="project">
      <div className="project-title">
        <img src={imagesrc} alt={title}/>
        <h3>{title}</h3>
      </div>
      <div className="project-links">
       
        <a href={site} target="_blank" rel="noopener noreferrer">
          Site
        </a>
        <a href={code} target="_blank" rel="noopener noreferrer">
          Code
        </a>
      </div>
    </div>
  );
};

export default Project;
