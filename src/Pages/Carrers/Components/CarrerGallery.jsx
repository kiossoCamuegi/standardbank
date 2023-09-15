import React from 'react'
import styled from 'styled-components'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ImageLazyLoading from '../../Components/ImageLazyLoading'
import {SlideshowLightbox} from 'lightbox.js-react'

function CarrerGallery() {
    const Images =  [
          "https://image-prod.iol.co.za/16x9/800/The-controversy-began-when-Standard-Bank-announced-its-intention-to-close-the-bank-accounts-of-companies-affiliated-with-Sekunjalo-Group-Picture-Armand-Hough-African-News-Agency-ANA?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/7cc140b9-43f7-5650-81eb-1f8c79a7b0f9",
          "https://www.moneyweb.co.za/wp-content/uploads/2021/10/380269167-555x370.jpg",
          "https://lh3.googleusercontent.com/p/AF1QipPW3KBpLWR3uYBGpzWEF7lbMePudSMUFQgQUd93=w600-k",
          "https://img.expansao.co.ao/image.ashx?type=generate&id=102102&source=ng1075524&w=800&t=20210504181400",
          "https://assets.world-architects.com/images/Projects/32/60/90/e6d0cc440ce44b5b95318fcaaf77df9f/e6d0cc440ce44b5b95318fcaaf77df9f.6e7b65d0.jpg",
    ]
  return (
     <Container>
       <div className="wrapper">
          <div className="center">
             <div><h1>Nossas Cedes & escritorios </h1></div>
          </div>
           <div className="content">
           <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}   >
                <Masonry columnsCount={3} gutter="30px">
                    {Images.map((item, index)=>(
                          <div key={index}>
                              <ImageLazyLoading height="300" source={item} />  
                          </div>
                     ))}
                </Masonry>
            </ResponsiveMasonry>
           </div>
       </div> 
     </Container>
  )
}

const Container = styled.div` 
   width:100%;

  .center{
       display:flex;
       align-items:center;
       jsutify-content:center;
       width:100%;
       text-align:center; 

       h1{
            font-size: 35px;
            line-height: 45px;
            font-weight: bold;
            margin: 20px 0px;
            text-align:center;
       }
  }


  img{
      width:100%;
      border-radius:10px;
  }
   
`;

export default CarrerGallery
