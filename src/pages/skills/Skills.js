import React from 'react';

import { skills } from "../../common/utils/data";
import './skills.css';


import TextComp from '../../common/components/TextComp';
import CardComp from '../../common/components/CardComp';
function Skills(){
    return  <>
        <section id="skills" className='section-container'>
            <div style={{marginBottom: '1rem'}}>
                <img style={{width: "3rem", margin:'auto'}} alt="coding logo" src="./skills.png" />
                <TextComp text={"Skills & Technologies"} color={"white"} size={"h1"} />
                
            </div>
            <div className="skills_renderer">
                {skills.map((skill) => (

                    
                <div key={skill} className="skill_card">
                    <CardComp
                        title={skill}
                        bgColor = {'#1f2937'} 
                        titleSize = {'lg'}
                        titleColor = {'white'}
                        padding= {'1rem'}                        
                        />
                </div>
                ))}
            </div>
        </section>
    </>
}

export default Skills;