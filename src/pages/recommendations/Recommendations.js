import React from 'react'
import './recommendation.css';
import { testimonials } from '../../common/utils/data';

import TextComp from '../../common/components/TextComp';
function Recommendations() {
  return (
    <section id="testimonials" className='section-container'>
        <div style={{marginBottom: '1rem'}}>
                <img style={{width: "3rem", margin:'auto'}} alt="coding logo" src="./recommendations.png" />
                <TextComp text={"Testimonials"} color={"white"} size={"h1"} />
        </div>

        <div className="testimonials_renderer">

            {testimonials.map((testimonial, index) => (

                        
              <div key={index} className="testimonial_card">
                  <img style={{width: "3rem", margin:'auto', marginBottom:'0.5rem'}} alt="coding logo" src="./quotes.png" />
                  <TextComp text={testimonial.message} color={'gray'} size={'md'} />
                  <div className='flex-container'>
                      <TextComp text={testimonial.name} color={'white'} size={'lg'} weight={'500'}/>
                      <TextComp text={testimonial.company} color={'gray'} size={'md'}  />
                      
                      <a href={testimonial.ref} target="_blank" className="ref-link" rel="noreferrer">
                          Reference
                      </a>
                  </div>
              </div>
            ))}


         
        </div>
    </section>
  )
}

export default Recommendations