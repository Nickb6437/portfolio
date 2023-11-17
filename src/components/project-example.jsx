import React from 'react';
import "../stylesheets/projectExample.css";


function ProjectExample({project}) {
  const {id, body, title, link, image, tags} = project;
  const direction = id % 2 === 0 ? "left" : "right";
  return (
    <div className={"project-example project-example__" + direction}>
      <div className="project-example__img">
          <img 
              src={process.env.PUBLIC_URL + image.src} 
              alt={image.alt}
              width="100%"
              height="auto"
          />
      </div>
      <div className="project-example__content">
          <h3>{title}</h3>
          <h6 classname="project-example__subheading">Built with</h6>
          <span className='project-example__content-tags'>
              {tags.map((tag, index) => {
                  return <span key={index} className="project-example__content-tag">{tag}</span>
              })}
          </span>
          <p>
              {body}
          </p>
          <a 
            href={link} 
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
              View Site
          </a> 
      </div>
    </div>
  );
}

export default ProjectExample;