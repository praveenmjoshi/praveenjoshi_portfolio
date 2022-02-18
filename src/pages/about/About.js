import React, {useState, useEffect} from 'react'
import './about.css'

import TextComp from '../../common/components/TextComp';
import ImgComp from '../../common/components/ImgComp';
import Flash from '../../common/components/FlashComp';
import {nameGreeting, greetingSubText, profileDescription}  from '../../common/utils/data';

function About() {
    // eslint-disable-next-line no-multi-str
    const [showFlash, setShowFlash] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setShowFlash(false)
        }, 3000)
    },[])
  return (
    <>
        <section id="about" className='about-container'>
                <Flash visibility={showFlash} type={'info'} message={"The Portfolio is inspired by REED BARGER article for UX Design only."} />
                <div className='description'>
                    <TextComp text={nameGreeting} color={"white"} size={"h1"} />
                    <TextComp text={greetingSubText} color={"white"} size={"h1"} />
                    <div style={{marginBottom: '2rem'}}>
                        <TextComp text={profileDescription} color={"gray"} size={"md"} />
                    </div>

                    

                    <div className='buttons-container'>                        
                        <a href="#contact" className='green-btn'> Would love to work with you! </a>                                              
                        <a href="#experience" className='gray-btn'> Have a look on my Past work</a>
                        <a href="#skills" className='gray-btn'> Skills</a>
                    </div>
                </div>
                <div>
                    <ImgComp path={"./profile.png"} width={'200px'} height={'auto'} radius={'50px'}/>
                </div>  
        </section>
    </>
  )
}

export default About