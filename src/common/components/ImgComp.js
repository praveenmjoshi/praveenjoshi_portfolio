import React from 'react'

function ImgComp({path, width, height, radius, alt=''}) {
  return (
    <img
        style={{width:width, height:height, borderRadius: radius}}
        alt={alt}
        src={path}
    />
  )
}

export default ImgComp