import React from 'react'
import {colors, sizes} from '../utils/textColorsSize';

function TextComp({text, size, color, weight}) {

    const textColor = color ? colors[`${color}`] : colors.black;
    const textSize = size ? sizes[`${size}`] : sizes.md;
    const textWeight = weight ? weight : '400';

  return (
    <span style={{ color: textColor, fontSize: textSize, fontWeight: textWeight}}>{text}</span>
  )
}

export default TextComp