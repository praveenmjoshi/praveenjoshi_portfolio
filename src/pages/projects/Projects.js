import React, { useState } from 'react';


import { projects } from "../../common/utils/data";
import CardComp from '../../common/components/CardComp';
import TextComp from '../../common/components/TextComp';
import ImgComp from '../../common/components/ImgComp';

import './projects.css';


function Projects(){
    // eslint-disable-next-line no-multi-str

    const [sectionHovered, setSectionHovered] = useState(-1);
   
    return <>
        <section id="projects" className='section-container'>
                <div className='proj-description'>
                    <img style={{width: "3rem", margin:'auto'}} alt="coding logo" src="./coding.png" />
                    
                    <TextComp text={"Apps I've Built"} color={"white"} size={"h1"} />
                </div>
                <div className='flex flex-wrap -m-4'>
                    {
                        projects.map((project, index) => (
                            <a
                                href={project.link}
                                key={index}
                                target="_blank"
                                rel="noreferrer"
                                className="project-card"
                                onMouseEnter={()=>{setSectionHovered(index)}}
                                onMouseLeave={()=>{setSectionHovered(-1)}}
                            >
                                { sectionHovered !== index && <ImgComp path={project.image} alt={'project image'} />}
                                {
                                    sectionHovered === index && <>
                                       <CardComp
                                            title={project.title}
                                            subtitle = {project.subtitle}
                                            description = {project.description}
                                            bgColor = {'#1f2937'} 
                                            titleSize = {'h1'}
                                            titleColor = {'green'}
                                            subtitleSize = {'sm'}
                                            subtitleColor = {'white'}
                                            padding = {'2rem'}
                                            footerText= {'Click Here'}
                                            footerLink = {project.link}
                                        />
                                    </>
                                }
                            </a>
                        ))
                    }
                </div>
        </section>  
    </>
}

export default Projects;