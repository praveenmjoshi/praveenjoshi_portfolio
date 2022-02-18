import React from 'react';
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import './contact.css';
function Contacts(){

    // eslint-disable-next-line no-multi-str
    const aboutme = "My experience has provided me with the problem solving ability and technical skills necessary to successfully provide your company with multifaceted technical solutions in web applications.\
    I would welcome the chance to provide further insight into my knowledge of technical abilities and experience."
    return <>
        <section id="contact">
            <hr className='contact-line-seperator'/>
            <div className='contact-container'>
                <div className="about-summay" >
                    {aboutme}
                </div>
                <div className='contact-link-container'>
                    <div className='contact-info'>
                        <SiGmail className='contact-icon' />
                        <a href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=praveenm.aikoor@gmail.com"} target={'_blank'} rel="noreferrer"> praveenm.aikoor@gmail.com</a>
                    </div>
                    <div className='contact-info'>
                        <SiLinkedin className='contact-icon' />
                        <a href={"https://www.linkedin.com/in/praveen-joshi-2b3861b1/"} target={'_blank'} rel="noreferrer"> praveen-joshi-2b3861b1</a>
                    </div>
                    <div className='contact-info'>
                        <SiGithub className='contact-icon' />
                        <a href={"https://github.com/praveenmjoshi"} target={'_blank'} rel="noreferrer"> praveenmjoshi</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Contacts;