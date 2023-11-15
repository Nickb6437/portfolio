import React from "react";
import "./stylesheets/about.css"

function About() {
    return (
        <>
        <div className="wrapper">
            <div className="about-intro">
                <div className="about-intro__image">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        version="1.1" 
                        viewBox="0 0 800 800"
                        className="about-intro__image-svg"
                    >
                        <defs>
                            <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                                <stop offset="0%" stopColor="#c7a00033" stopOpacity="0.5"></stop>
                                <stop offset="50%" stopColor="rgba(255, 209, 5, .2)" stopOpacity="0"></stop>
                                <stop offset="100%" stopColor="#ffff5333" stopOpacity="0.5"></stop>
                            </radialGradient>
                        </defs>
                        <g fill="url(#cccircular-grad)">
                            <circle r="414" cx="400" cy="400" opacity="0.05"></circle>
                            <circle r="345" cx="400" cy="400" opacity="0.24"></circle>
                            <circle r="276" cx="400" cy="400" opacity="0.43"></circle>
                            <circle r="207" cx="400" cy="400" opacity="0.62"></circle>
                            <circle r="138" cx="400" cy="400" opacity="0.81"></circle>
                        </g>
                    </svg>

                    <img
                        className="circle-img" 
                        src={process.env.PUBLIC_URL + "/images/ProfilePic.JPG"} 
                        alt="Profile"
                        width="auto"
                        height="100%"
                    /> 
                </div>
                <div className="about-intro__content">
                    <h1 id="heading">Hi I'm Nick Brown</h1> 
                    <h2 id="heading2">
                        Open Source Full-Stack Web Developer!
                    </h2>
                    <h3 className="subheading">
                        Welcome and thank you for visiting my portfolio site. 
                    </h3>
                    <div>   
                        <p>
                            I am a self taught web developer, who has been learning and building websites for the last 2 and half years.
                        </p>
                        <p>
                            I started my working life in the print and design industry. For 15 years I worked in all aspects from graphic design, print finishing, print production and print management. Like many people I was made redundant in 2020, and decided to take the opportunity to change career and learn web development.
                        </p>
                        <p>
                            From taking a few online courses I was hooked, and have been learning and building websites ever since. I have built many sites for two agencies in Southampton, and have also built a few sites for friends and family.
                        </p>
                    </div>
                    <div className="about-intro__buttons">
                        <a 
                            href="/projects"
                            className="btn btn-primary"
                        >View Projects</a>
                        <a 
                            href="#learnMore"
                            className="btn btn-primary"
                        >Learn More</a>
                    </div>
                </div>
            </div>

            <div id="learnMore"></div>
            <div className="about-further-info">
                <div className="about-further-info__content">
                    <h3 className="">ICAAL - Junior Frontend Developer</h3>
                    <h6>Apr 2020 to July 2023</h6>
                    <p>
                        In April 2021 I was taken under the wing of <a href="https://www.internetconsultancy.pro/?gclid=CjwKCAjw4KyJBhAbEiwAaAQbE2nTE4gamnXKiaPkxwX4nI_bJpwqKjBibZqfMNy1sfYMtIZljKZkzxoCcDIQAvD_BwE" target="_blank" rel="noreferrer">ICAAL</a> in Southampton as Junior Web Developer.
                    </p>
                    <p>
                        Here was my first time seeing using php and wordpress, a real sink or swim moment. I was able to pick up the basics of php and wordpress quickly, and was soon building sites using the Advanced Custom Fields plugin and the sage bedrock starter theme.
                    </p>
                    <p>
                        I gained many skills while at ICAAL, including working with a team of developers, using github, working with a project manager, the content writers, working to deadlines and working directly with the clients too.
                    </p>
                    <p>
                        I have worked on a range of projects at ICAAL varying in size, complexity and tech stack. A few of which can be view here :-
                        <br/>
                        <em>*These site may have changed and been worked on since I depart the company and therefor may not be a true resprentation on my work</em>
                    </p>
                    <div className="project-example project-example__left">
                        <div className="project-example__img">
                            <img 
                                src={process.env.PUBLIC_URL + "/images/uf.JPG"} 
                                alt="ultraframe"
                                width="100%"
                                height="auto"
                            />
                        </div>
                        <div className="project-example__content">
                            <h3>Ultraframe</h3>
                            <p>
                                The Ultraframe site, was an existing laravel 5.6 site, with numerous subdomains and dashboards. I would regulary help manage tickest, adding new pages, updating content and adding new features. One of these features was the HUP confifurator. This was a bespoke configurator built using Vue JS, which allows the user to build their own conservatory and get a quote.
                            </p>
                            <a 
                                href="https://www.ultraframe-conservatories.co.uk/hup" 
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Site
                            </a> 
                        </div>
                    </div>
                    <div className="project-example project-example__right">
                        <div className="project-example__content">
                            <h3>Eco Star Double Glazing Au</h3>
                            <p>
                                The Eco Star Solar site was a wordpress site rebuild. Built using the sage bedrock starter theme. I was responsible for liasing with the client (In Australia), design and building the site. The site boasted custom sql queries to display the correct home page hero and mobile showroom data on the correct days.
                            </p>
                            <a
                                href="https://www.ecostardoubleglazing.com.au/"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >View Site</a>
                        </div>
                        <div className="project-example__img">
                            <img 
                                src={process.env.PUBLIC_URL + "/images/ecoStar.JPG"} 
                                alt="Eco Star Double Glazing AU" 
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </div>
                    <div className="project-example project-example__left">
                        <div className="project-example__img">
                            <img 
                                src={process.env.PUBLIC_URL + "/images/eta.JPG"} 
                                alt="Exeter Trade Aluminium"
                                width="100%"
                                height="auto"
                            />
                        </div>
                        <div className="project-example__content">
                            <h3>Exeter Trade Aluminium</h3>
                            <p>
                                The Exeter Trade Aluminium site was a wordpress site rebuild. Built using the sage bedrock starter theme. I was responsible for liasing with the client, design and building the site. The site boasts a bespoke quote form, which allows the user to select the product they are interested in, and upload images or plans. The site holds a lot of technical product data which is displayed in a clean and easy to read way
                            </p>
                            <a 
                                href="https://exetertradealuminium.co.uk/" 
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Site
                            </a> 
                        </div>
                    </div>
                    <div className="project-example project-example__right">
                        <div className="project-example__content">
                            <h3>Clear Vision Services</h3>
                            <p>
                                The Clear Vision Services site was a wordpress site rebuild. Built using the sage bedrock starter theme. I was responsible for liasing with the client, design and building the site. The site boasts both a commerical and residential side. Upon first viewing the site the site you are greeted with a landing page to choose yur service level. It also incorporates a bespoke quote form, which allows the user to input their property details and get a quote for the service they require.
                            </p>
                            <a
                                href="https://clearvisionservices.co.uk/"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >View Site</a>
                        </div>
                        <div className="project-example__img">
                            <img 
                                src={process.env.PUBLIC_URL + "/images/cvs.JPG"} 
                                alt="Clear Vision Services" 
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-further-info">
                <div className="about-further-info__content">
                    <h3 className="">The MTM Agency - Open Source Web Developer</h3>
                    <h6>July 2023 to November 2023</h6>
                    <div className="text-area">
                        <p> 
                            In July 2021 I made a move promising move to <a href="https://www.themtmagency.com/" target="_blank" rel="noreferrer">The MTM Agency</a> in Southampton as Open Source Web Developer.
                        </p>
                        <p>
                            Here I was able to build on my skills and knowledge of wordpress and php. I gained the opportunity to learn and work with the Timber and Twig templating engine, which was a new experience for me. This gave me an insight into the symfony framework and working with wordpress Gutternberg blocks.
                        </p>
                        <p>
                            Although my time at MTM was short, I was able to work on a range of projects, varying from small brochure sites to large ecommerce sites. Foucsing on bug fixes, adding new features and rebranding existing sites. I my last 5-6 weeks with the company I under took a WordPress project build. I was responsible for liasing with the designer, account manger and QA tester along with building the site.
                        </p>
                        <p>
                            The Site was built using the Timber Twig Templating engine and I got the opritunity to introduce Tailwind css into there stack. The site was built taking full advantage of the Gutternberg blocks,and custom post types. The site also boasts a bespoke full custom login, registration and password reset. A custom 'Ask a Question' form was built, which allows the members to ask a question. The question is then sent to the members forum custom post type as a pending post awaiting approval. Once approved the question is then displayed on the forum page.
                        </p>
                        <p>
                            <em>
                                Pending site live, I will be able to share the site here.
                            </em>
                        </p>
                    </div>
                </div>
            </div>
         </div>
         <div className="skills">
            <h3 className="skills__title">
                Some of the languages and packages I have learnt so far...
            </h3>
            <div className="skills__wrapper">
                <div className="blur-start"></div>
                <div className="blur-end"></div>
                <div className="iconGrid col-12 col-lg-6 mx-auto">
                    <div>
                        <img 
                            className="icon html" 
                            src={process.env.PUBLIC_URL + "/images/HTML5.PNG"} 
                            alt="HTML 5"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon html" 
                            src={process.env.PUBLIC_URL + "/images/CSS3.PNG"} 
                            alt="CSS 3"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon html" 
                            src={process.env.PUBLIC_URL + "/images/Js.PNG"} 
                            alt="Js"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon jquery" 
                            src={process.env.PUBLIC_URL + "/images/JQuery.webp"} 
                            alt="J query"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon bootstrap" 
                            src={process.env.PUBLIC_URL + "/images/Bootstrap-5.PNG"} 
                            alt="Bootstrap 5"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon node" 
                            src={process.env.PUBLIC_URL + "/images/Node-js.PNG"} 
                            alt="Node JS"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon babel" 
                            src={process.env.PUBLIC_URL + "/images/Babel.PNG"} 
                            alt="Babel"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon es6" 
                            src={process.env.PUBLIC_URL + "/images/Es6.PNG"} 
                            alt="es6"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon express" 
                            src={process.env.PUBLIC_URL + "/images/ExpressJS.PNG"} 
                            alt="Express JS"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon mongo" 
                            src={process.env.PUBLIC_URL + "/images/MongoDB.PNG"} 
                            alt="Mongo DB"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon npm" 
                            src={process.env.PUBLIC_URL + "/images/Npm-logo.PNG"} 
                            alt="npm"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon react" 
                            src={process.env.PUBLIC_URL + "/images/React.PNG"} 
                            alt="React"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon github" 
                            src={process.env.PUBLIC_URL + "/images/Github.PNG"} 
                            alt="Github"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon hyper" 
                            src={process.env.PUBLIC_URL + "/images/Hyper.PNG"} 
                            alt="Hyper"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon vscode" 
                            src={process.env.PUBLIC_URL + "/images/Vscode-logo.PNG"} 
                            alt="vs code"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon atom" 
                            src={process.env.PUBLIC_URL + "/images/Atom.PNG"} 
                            alt="Atom"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon Wordpress" 
                            src={process.env.PUBLIC_URL + "/images/Wordpress.PNG"} 
                            alt="Wordpress"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon Sass" 
                            src={process.env.PUBLIC_URL + "/images/Sass.PNG"} 
                            alt="Sass"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon Tailwind" 
                            src={process.env.PUBLIC_URL + "/images/Tailwind.PNG"} 
                            alt="Tailwind"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon PhpMySql" 
                            src={process.env.PUBLIC_URL + "/images/PhpMySql.PNG"} 
                            alt="PhpMySql"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon Nuxt" 
                            src={process.env.PUBLIC_URL + "/images/NuxtJS_Logo.PNG"} 
                            alt="Sass"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon Vue" 
                            src={process.env.PUBLIC_URL + "/images/vue3.PNG"} 
                            alt="Vue3 js"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon Laravel" 
                            src={process.env.PUBLIC_URL + "/images/Laravel.PNG"} 
                            alt="Laravel"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon Timber" 
                            src={process.env.PUBLIC_URL + "/images/timber.PNG"} 
                            alt="Timber"
                        />
                    </div>
                    <div>
                        <img 
                            className="icon Twig" 
                            src={process.env.PUBLIC_URL + "/images/twig.PNG"} 
                            alt="Twig"
                        />
                    </div>
                </div>
            </div>
            <div className="packages">
                <span className="packages__name">HTML 5</span>
                <span className="packages__name">CSS 3</span>
                <span className="packages__name">JavaScript</span>
                <span className="packages__name">JQuery</span>
                <span className="packages__name">Bootstrap 5</span>
                <span className="packages__name">Node JS</span>
                <span className="packages__name">Babel</span>
                <span className="packages__name">ES6</span>
                <span className="packages__name">Express JS</span>
                <span className="packages__name">Mongo DB</span>
                <span className="packages__name">NPM</span>
                <span className="packages__name">React</span>
                <span className="packages__name">Github</span>
                <span className="packages__name">Hyper</span>
                <span className="packages__name">VS Code</span>
                <span className="packages__name">Atom</span>
                <span className="packages__name">Wordpress</span>
                <span className="packages__name">Sass</span>
                <span className="packages__name">Tailwind</span>
                <span className="packages__name">PhpMySql</span>
                <span className="packages__name">Nuxt JS</span>
                <span className="packages__name">Vue 3</span>
                <span className="packages__name">Laravel 8</span>
                <span className="packages__name">Timber</span>
                <span className="packages__name">Twig</span>
            </div>
         </div>
        </>
    );
}

export default About;     