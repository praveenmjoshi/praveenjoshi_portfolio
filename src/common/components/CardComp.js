import React from 'react'
import TextComp from './TextComp'
function CardComp(props) {
    const {title, subtitle, subtitle2, description, footerText,footerLink, bgColor, titleSize, subtitleSize, titleColor, subtitleColor, padding} = props
    return (
        
            <div style={{backgroundColor: bgColor, padding: padding, borderRadius: '0.3rem', height: '100%'}} >
                {subtitle && <>
                    <TextComp text={subtitle} color={subtitleColor} size={subtitleSize} /> 
                    <br/>
                </>}
                {subtitle2 && <>
                    <TextComp text={subtitle2} color={subtitleColor} size={subtitleSize} /> 
                    <br/>
                </>}
                
                {title &&  <TextComp text={title} color={titleColor} size={titleSize} />}
                

                { description && <p className="">{description}</p>}

                { footerText && <a style={{color:subtitleColor, fontsize:subtitleSize }} href={footerLink}> {footerText} </a>}
            </div>
        
    )
}

export default CardComp