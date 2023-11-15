import React from "react"
import "./stylesheets/card.css"

function projectCard(props) {
    return (
        <div className="project-card">
            <div className="project-card__inner">
                <div className="project-card__inner-main">
                    <img 
                        className="project-card__img" 
                        alt={props.alt} 
                        src={props.image} 
                        width="100%"
                        height="auto"
                        data-holder-rendered="true"
                    />
                            
                    <div className="project-card__content">
                        <h5 className="project-card__title">
                            {props.title}
                        </h5>
                        <p className="project-card__body">
                            {props.text}
                        </p>
                    </div>
                </div>
                <div className="project-card__btn">
                    <a
                        className="project-card__link"
                        href={props.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>   
    );
}

export default projectCard;