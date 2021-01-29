import React from "react";
import Card from "./Card"
import Sites from "../sites"

import "./stylesheets/projects.css"

function Projects() {
    return (
        <div>
            <h2 className="projects-title">A few of my projects</h2>

            <div className="container">
                <div className="row">
                    {Sites.map((site) => (
                            <Card
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

        </div>
    );     
}

export default Projects;