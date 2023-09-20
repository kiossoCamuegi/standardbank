import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Avatar, AvatarGroup } from '@mui/material';
import {AiFillStar} from "react-icons/ai";
import ImageLazyLoading from '../Components/ImageLazyLoading';
import CarrerHelp from '../Carrers/Components/CarrerHelp';

const Images = [
  require("../../Assets/images/flags/1.png"), 
  require("../../Assets/images/flags/2.avif"), 
  require("../../Assets/images/flags/3.png"), 
  require("../../Assets/images/flags/4.webp"), 
  require("../../Assets/images/flags/5.webp"),  
  require("../../Assets/images/flags/7.webp"),  
  require("../../Assets/images/flags/8.webp"),  
];



const Logo =  require("../../Assets/images/flags/africa.png"); 
const Thumb =  require("../../Assets/images/logo5.png");

const Apps = [
  require("../../Assets/images/apple.png"),
  require("../../Assets/images/play.png")
]

const CoverAssets = [
  "https://www.istoenoticia.info/wp-content/uploads/2021/11/Standard-Bank-850x560.jpeg", 
  require("../../Assets/videos/vd.mp4"), 
 "https://assets.euromoneydigital.com/44/43/e63c1ddb4dbd9fd7545ded573e7c/standardbank-alamy-4april22.jpg", 
]

function About() {
  return (
    <Container>
        <Navbar />
        <div className="about-header">
           <div className="wrapper">
               <div className="about-header-content">
                  <div className="text">
                      <div className="title">Mudamos o mundo e <span className='text-blue'>Inpactamos</span> a Indústria Financeira</div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ex ab debitis quo enim reiciendis placeat nihil
                        quis minima, est ducimus itaque totam libero quaerat corrupti praesentium atque eius facere architecto deserunt quam?
                         sapiente est ipsa maxime rerum praesentium reprehenderit
                       </p>
                       <br />
                       <small className="text-light">Baixe o nosso aplicativo</small>
                       <div className="d-flex downloads">
                            <a href="#" className="mr-2 mt-2">
                                <img src={Apps[0]} alt="" />
                            </a>
                            <a href="#" className="mr-2 mt-2">
                                <img src={Apps[1]} alt="" />
                            </a>
                       </div>
                       <div className="text-light d-flex mt-4">
                            <div className="ml-1"><small>O Melhor banco de africa</small></div>
                           <div className="d-flex">
                           <div className="start ml-1"><AiFillStar/> </div>
                           <div className="start ml-1"><AiFillStar/> </div>
                           <div className="start ml-1"><AiFillStar/> </div>
                           <div className="start ml-1"><AiFillStar/> </div>
                           <div className="start ml-1"><AiFillStar/> </div>
                           </div>
                       </div>
                  </div>
                  <div className="image">
                    <ul class="got-shields"> 
                        <li class="shield blue">
                          <div className="top">
                          <AvatarGroup max={8}>
                          {Images.map((item ,index)=>{
                              return(<Avatar alt="Remy Sharp" src={item} />);
                          })}
                        </AvatarGroup>
                          </div>
                            <div className="bar"></div>  
                        </li> 
                        <div className="bx">
                            <li className="shield white">
                                <div className="logo">
                                    <img src={Logo} alt="" />
                                </div>
                                 <div className="center">
                                      <img src={Thumb} alt="" />
                                 </div>
                            </li>
                        </div>
                    </ul>
                  </div>
               </div>
           </div>
        </div>
     <div className="about-content">
      <div className="wrapper">
      <div className="text-block">
           <div className="image">
               <ImageLazyLoading height="300" source={CoverAssets[0]} />   
           </div>
           <div className="text">
               <h1 className="title">Melhorando o mundo e impactando Vidas</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime beatae consectetur porro dolorem explicabo nemo, 
                nihil minus dolore sapiente officia, vero fuga quisquam deleniti impedit. Animi ea nam doloribus amet tempora praesentium  
                  beatae! A corrupti, quo fugiat ad, veritatis aliquid voluptatibus dicta expedita, cupiditate amet dolore sunt. Pariatur in.
                  <br /><br />
                  consectetur magnam sunt maxime illum veritatis repudiandae, consequatur itaque quo accusamus ipsa rerum debitis ea corrupti
                  beatae! A corrupti, quo fugiat ad, veritatis aliquid voluptatibus dicta expedita, cupiditate amet dolore sunt. Pariatur in
                  consectetur magnam sunt maxime illum veritatis repudiandae, consequatur itaque quo accusamus ipsa rerum debitis ea corrupti
                  beatae! A corrupti, quo fugiat ad, veritatis aliquid voluptatibus dicta expedita, cupiditate amet dolore sunt. Pariatur in
                   dolorem porro enim omnis doloremque amet ex dignissimos, repellendus similique consectetur velit aspernatur laborum et 
                </p>
           </div>
        </div> 
        <div className="text-block reverse"> 
           <div className="text">
           <h1 className="title">Não somos apenas os melhores de Africa mas o melhor para as pessoas</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime beatae consectetur porro dolorem explicabo nemo, 
                nihil minus dolore sapiente officia, vero fuga quisquam deleniti impedit. Animi ea nam doloribus amet tempora praesentium  
                  beatae! A corrupti, quo fugiat ad, veritatis aliquid voluptatibus dicta expedita, cupiditate amet dolore sunt. Pariatur in.
                  <br /><br />
                  consectetur magnam sunt maxime illum veritatis repudiandae, consequatur itaque quo accusamus ipsa rerum debitis ea corrupti
                  beatae! A corrupti, quo fugiat ad, veritatis aliquid voluptatibus dicta expedita, cupiditate amet dolore sunt. Pariatur in  
                   dolorem porro enim omnis doloremque amet ex dignissimos, repellendus similique consectetur velit aspernatur laborum et 
                   dolorem porro enim omnis doloremque amet ex dignissimos, repellendus similique consectetur velit aspernatur laborum.
                </p>
           </div> 
           <div className="image"> 
               <ImageLazyLoading height="300" source={CoverAssets[2]} />   
           </div>
        </div>
      </div>
        <br />
         <div className="wrapper"> 
           <div className="frame">
           <div className="text-center">
                 <h1>Onde a paixão e a aspiração se <span className="text-blue">conectam</span></h1>
            </div>
              <iframe  src="https://www.youtube.com/embed/U6SuMfmR_iE?si=JsO4lpb0t4NN5F4-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
         </div>
           <br />
     </div>
        <CarrerHelp />
        <Footer />
    </Container>
  )
}


const Container = styled.div` 
    .frame{ 
      h1{
        font-size: 35px;
        line-height: 45px;
        font-weight: bold;
        margin: 20px 0px; 
      }
      iframe{
        min-height:650px;
        background:var(--black);
        width:100% !important;
      }
    }



   .text-block{
      display:flex;
      padding:20px;
      margin:20px 0px;

      p{ 
        margin-top: 20px;
        color: #4F5D75!important;
      }

      h1{
        font-size: 35px;
        line-height: 45px;
        font-weight: bold;
        margin: 20px 0px;
      }

     .image{
          max-width:650px;
          min-width:650px;
          padding-right:40px;

            img{
              width:100%;
            }
      } 
   }


   .text-block.reverse{
       .image{
          padding:0px;
       }

       .text{
          padding-right:40px;
       }
   }


  .banner-video{
      height:500px;
      overflow:hidden;
      width:100%;
      position:relative;


        video{
            height:100%;
            width:100%;
            object-fit:cover;
        }


        .video-over{
             position:absolute;
             top:0px;
             left:0px;
             width:100%;
             height:100%; 
             background:rgba(0,0,0,0.3);
             display:flex;
             align-items:center;


            .title{
              width:100%; 
              font-weight:600;
              color:#ffff; 
              font-size:60px;
              max-width:1300px; 
            }

        }
  }




  .about-header{
     width:100%;
     height:750px;
     background:var(--black);

     .about-header-content{
        display:flex;
        align-items:center;
        width:100%;
        padding:20px 0px;

      .text{
        max-width:950px; 

        .ml-1{
            margin-right:10px;

                svg{
                    fill:orange;
                }
        }

        .title{
          width:100%; 
          font-weight:600;
          color:#ffff; 
          font-size:60px;
          max-width:900px; 
        }

        .downloads{
            img{
                max-width:200px;
                height:60px;
            }
        }

        p{
          font-size:15px;
          color:silver !important;
          letter-spacing:1px;
          max-width:800px; 
          margin:20px 0px;
        }
 

      }


      .image{
          width:490px;
          min-width:490px;
          height:580px; 
          position:relative;
          position: relative;
          overflow:hidden;
          margin-top:50px;
                        
        .got-shields li {display:inline-block;}


        .shield {
            position: relative;
            width:230px;
            min-width:300px;
            height:400px;
            border:5px solid var(--blue);
            border-radius:20px;

              .top{
                  width:90%;
                  margin:10px; 
                  height:40px;
                  z-index:1000;
                  position:relative;
              }

              .bar{
                  width:100px;
                  height:354px;
                  background:var(--black);
                  position: absolute;
                  z-index:100;
                  left:2.5px;
                  top:13px;
              }
        }

      

        .shield:before, .shield:after {
            content:"";
            border-radius: 0;
            border:8px solid green;
            border-top-right-radius: 100% 100%;
            border-bottom-right-radius: 125% 100%;
            border-color:var(--blue);
            width:175px;
            height:6em;
            transform-origin: bottom left;
            transform: scale(1,1) translateX(5em) rotate(-20deg);
            position:absolute;
            bottom:-21%;
            left:59px; 
        }

        .shield:after {transform: scale(-1,1) translateX(-5em) rotate(-20deg);}
        .shield, .shield:before, .shield:after {background: grey;}
        .shield.test, .shield.test:before, .shield.test:after {background: rgba(0, 127, 0, 0.5);}


        .bx{
          position: absolute;
          width:350px;
          min-width:350px;
          height:400px;  
          left:130px;
          z-index:1000;
          top:80px;

            .shield{
              width:350px;
              min-width:350px;
              z-index:1000;
              border:5px solid #ffff;


                  .logo{
                    position: absolute;
                    right:10px;
                    top:10px;
                    width:80px;
                    height:80px;
                    display:flex;
                    align-items:center;  
                    border-radius:100%; 
                  }


                  .center{
                      width:240px;
                      height:270px; 
                      position: absolute;
                      left:50px;
                      top:110px;
                      z-index:1000; 
                  }

                  img{
                      width:100%;
                      height:100%;
                  }


            }

            .shield:before, .shield:after { 
              width:207px;
              height:7em; 
              bottom:-25%;
              left:85px; 
              border:5px solid #ffff;
          }


      }


        .red, .red:before, .red:after {background:red;}
        .white, .white:before, .white:after {background:#ffff;}
        .blue, .blue:before, .blue:after {background:var(--black);}


      }
      
     }

    

  }
`;

export default About