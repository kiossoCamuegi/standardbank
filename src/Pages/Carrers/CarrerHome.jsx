import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavbarCarrers from './Components/NavbarCarrers';
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Form } from 'react-bootstrap';
import {BsPinMapFill, BsSearch} from "react-icons/bs";
import CarrerCards from './Components/CarrerCards';
import Footer from '../Components/Footer';
import CarerrTestimonial from './Components/CarerrTestimonial';
import CarrerGallery from './Components/CarrerGallery';
import CarrerHelp from './Components/CarrerHelp';
const VideoSrc =  require("../../Assets/videos/vd.mp4");
const Logo =  require("../../Assets/images/logo4.png");
const Logo1 =  require("../../Assets/images/logo5.png");


function CarrerHome() {
  document.title =  "Standard Bank - Carreiras";
  const [Load, setLoaded] = useState(false);


  useEffect(()=>{
      setTimeout(() => {
         setLoaded(true);
      }, 4000);
  },[]);



 if(Load){
    return (
        <section>
        <Container>
               <NavbarCarrers /> 
               <div className="cover carrer-home"> 
                  {window.innerWidth >= 9000 ?
                   <video src={VideoSrc} poster='https://www.aljazeera.com/wp-content/uploads/2023/03/story_15_final.jpg?resize=1620%2C1080&quality=80' muted autoPlay loop />:
                   <></>}
                   <div className="cover-over">
                   <div className="wrapper">
                       <div className="content">
                           <div className='title' >Bem-Vindo a Standard Bank Carrers onde <span className="span text-blue">crescemos</span> Juntos</div>
                               <h3>Onde a paixao e tabalhos se misturam , e podes ser o que quiseres aqui.</h3>
                               <Form action='/carrersearch'>
                                 <div className="d-flex">
                                 <div className="icon"><BsSearch/></div>
                                   <Form.Control placeholder={window.innerWidth >= 9000 ? 'Pesquisar empregos por titulos' : "Pesquisar ..."} />
                                 </div>
                                  <div className="d-flex">
                                  <div className="icon"><BsPinMapFill/></div>
                                   <Form.Select>
                                       <option value="0">Angola</option>
                                       <option value="1">Africa do sul</option>
                                       <option value="2">Namibia</option>
                                       <option value="3">Moçambique</option>
                                   </Form.Select>
                                  </div>
                                   <button className="btn bg-blue text-light">Pesquisar</button>
                               </Form>
                       </div>
                   </div>
                   </div>
               </div> 
           </Container>    
         <CarrerCards />
         <CarrerGallery />
         <CarerrTestimonial />
         <CarrerHelp />
         <Footer/> 
        </section>
     )
 }else{
    return( 
       <div className="loader">
          <div>
             <img src={window.innerWidth >= 9000 ?  Logo : Logo1} alt="" />
              <h2>Carreira para todos</h2>
          </div>
       </div>
    )
 }
}

const Container = styled.div` 
       .cover{
        position:relative;
        width:100%;
        height:590px;

          img{
              width:100%;
              height:600px; 
              object-fit:cover;
          }

          video{
            width:100%;
            height:590px; 
            object-fit:cover;
          }

          .cover-over{
              position:absolute;
              top:0px;
              left:0px;
              width:100%;
              height:100%;
              background:rgba(0,0,0,0.4);
              padding-top:100px;

              .title{
                  width:100%; 
                  font-weight:600;
                  color:#ffff; 
                  font-size:60px;
                  max-width:1000px; 
              }

              h3{
                  font-size:20px;
                  color:#fff;
                  margin-bottom:20px;
              }

                 form{
                      background:#ffff;
                      display:flex;
                      align-items:center;
                      max-width:800px;

                      input, .btn, select{
                          height:60px;
                          border:none;
                      }

                       .icon{
                          padding:0px 10px; 
                          font-size:16px !important;

                            svg{
                                 width:20px !important;
                                 height:20px !important;
                            }
                       }

                       .d-flex{
                         align-items:center;
                       }
                 }
          }



       }
`;


export default CarrerHome
