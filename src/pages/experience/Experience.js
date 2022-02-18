import React from 'react';
import styled from 'styled-components';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import TextComp from '../../common/components/TextComp';
import CardComp from '../../common/components/CardComp';

import { experiences , professionalDescription} from '../../common/utils/data'
function Experience() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    }
    return (
      <section id="experience" className='section-container'>
                <div className='proj-description'>
                    <img style={{width: "3rem", margin:'auto'}} alt="coding logo" src="./coding.png" />
                    
                    <TextComp text={"Professional Experience"} color={"white"} size={"h1"} />
                    <TextComp text={professionalDescription} color={"gray"} size={"md"} />
                </div>
                <Carousel { ...settings }>
                {
                        experiences.map((exp) => (
                          <Wrap>
                                <CardComp
                                    title={exp.company}
                                    subtitle = {exp.designation}
                                    subtitle2 = {exp.duration}
                                    description = {exp.description}
                                    bgColor = {'#1f2937'} 
                                    titleSize = {'h1'}
                                    titleColor = {'green'}
                                    subtitleSize = {'sm'}
                                    subtitleColor = {'white'}
                                    padding = {'2rem'}
                                 /> 
                            </Wrap>
                        ))
                    }
              </Carousel>

      </section>
        
    )
}

export default Experience

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before{
        color: white;
    }
    .slick-list{
        overflow: hidden;
    }

    button{
        z-index: 1;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 4px solid transparent;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 /73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    
    }
`