import React, { useEffect, useState } from 'react';
import {Blurhash} from "react-blurhash";

function ImageLazyLoading({source, height}){
 const [ImageLoaded, setImageLoaded] = useState(false);

const loadImage = ()=>{
    const img = new Image();
    img.onload = ()=>{
         setImageLoaded(true);
    }
    img.src = source;
}


 useEffect(()=>{
    loadImage();
 },[source]);


  return (
    <>
       <div style={{display:ImageLoaded ? "none" : "inline"}}>
        <Blurhash   
             hash="LKB|HR~pJiE1x]yDT0NbWAWBt9WZ"
             width="100%"
             height={(height !== null && height > 1) ? height : 200}
             resolutionX={32}
             resolutionY={32}
             punch={1}
        />
        </div>
       <img loading="lazy" role="presentation"  src={source} style={{display: !ImageLoaded ? "none" : "inline"}} />
    </>
  )
}

export default ImageLazyLoading
