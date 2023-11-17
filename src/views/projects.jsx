import React from "react";
import Sites from "../sites"
import ProjectCard from "../components/projectCard"
import "../stylesheets/projects.css"

const sortedSites = Sites.sort((a, b) => b.id - a.id);

function Projects() {
    return (
        <>
            <div className="projects-container">
                <h2 className="projects-container__title">Personal Projects and Sites</h2>
                <p className="projects-container__body">
                    Here are some of the projects and sites I've worked on. 
                    I've included a brief description of each project, as well as links to the sites or codepens themselves.
                </p>
                <div className="projects-container__rows">
                    {sortedSites.map((site) => (
                        <ProjectCard
                            id={site.id}
                            text={site.text}
                            title={site.title}
                            link={site.link}
                            image={site.image}
                            alt={site.alt}
                        />
                    ))}
                </div>
            </div>
        </>
    );     
}

export default Projects;