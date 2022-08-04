import React from 'react'

function Img({src, size, alt, className}) {
  return (
    <img className={className} src={src} alt={alt} style={{width:`${size}px`, height:`${size}px`}}/>
  )
}

export default Img