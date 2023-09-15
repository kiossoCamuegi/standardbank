import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer';
import NavbarCarrers from './Components/NavbarCarrers'; 
import {BsPinMapFill,BsBuildingCheck,  BsSearch} from "react-icons/bs";
import {BiMap} from "react-icons/bi";
import { Avatar } from '@mui/material';

function CarrerJobDetails() {

    document.title = "StandardJobs - desenvolvedor de softwares fullstack";
 

  return (
    <section>
    <Container>
        <NavbarCarrers /> 
        <br /> <br />
         <div className="wrapper">
              <div className="content carrer-details">
                  <div className="content-details">
                   <h1 className="title">Desenvolvedor de softwares fullstack</h1> 
                    <div className="small-dets">
                        <div className="d-flex"><BsBuildingCheck/> Talatona Standard Bank Building</div>
                        <div className="d-flex"><BiMap/> Angola , Luanda </div>
                    </div> 
                    <div className="boxes">
                         <div className="bx"> Partilhar</div>
                         <div className="bx"> partilhar</div>
                         <div className="bx"> Copiar</div>
                    </div> 
                   <div className="block-info">
                   <div className="subtitle">Descrição do emprego</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt quibusdam quidem voluptatibus fugit quaerat officiis quod repellendus doloribus omnis. Quaerat eaque quibusdam est et placeat repellendus commodi qui nemo eveniet maiores voluptatibus fugiat minima voluptas incidunt quis dolor, inventore, ad deserunt! Alias voluptatum minima tempore ipsa perspiciatis, repellendus voluptates?
                    </p>
                   </div>
                   <div className="block-info">
                       <div className="subtitle">Responsabilidades</div>
                       <ol  type='1'>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                       </ol>
                   </div>
                   <div className="block-info">
                       <div className="subtitle">Qualificações</div>
                       <ol  type='1'>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                           <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                       </ol>
                   </div>
                  </div>
                  <div className="box-details">
                      <div className="center">
                        <Avatar sx={{width:130,height:130}} src="" />
                        <h2 className="subtitle">Standard Bank Group</h2>
                      </div>
                       <button className="btn col-lg-12 bg-blue text-light mt-2">Aplicar</button>
                       <button className="btn col-lg-12 text-blue bordered mt-2">Criar CV custumizado</button>
                       <div className="bar mt-2"></div>
                       <ul>

                           <li>
                              <div className="icon"> </div>
                              <div className="text">
                                 <small>Tipo de emprego</small>
                                 <h5>Contrato</h5>
                              </div>
                           </li>
                           <li>
                              <div className="icon"> </div>
                              <div className="text">
                                 <small>Tipo de emprego</small>
                                 <h5>Contrato</h5>
                              </div>
                           </li>
                           <li>
                              <div className="icon"> </div>
                              <div className="text">
                                 <small>Tipo de emprego</small>
                                 <h5>Contrato</h5>
                              </div>
                           </li> 
                           <li>
                              <div className="icon"> </div>
                              <div className="text">
                                 <small>Tipo de emprego</small>
                                 <h5>Contrato</h5>
                              </div>
                           </li>


                       </ul>
                  </div>
              </div>
         </div>
         <br /><br />
       </Container>      
     <Footer />
    </section>
  )
}


const Container = styled.div`
   background:#F8F9FA; 
   

 .content{ 
     width:100%;
     background:#ffff;  
     min-height:440px; 
     box-shadow:0px 3px 10px rgba(0,0,0,0.1);
     padding:20px; 
     display:flex; 
     margin:0 auto;


      .content-details{
        padding-right:20px;

        .title{
            font-size:30px;
            font-weight:600;
            color:var(--black);
          }

          .small-dets{
              display:flex;
              align-items:center;
              margin-bottom:20px;
              margin-top:5px;
              font-size:15px;
              color:grey;

               .d-flex{
                  align-items:center;
                  margin-right:15px;

                   svg{
                      margin-right:5px;
                   }
               }
          }


          .block-info{
            margin:20px 0px;

            .subtitle{
                font-size:20px;
                font-weight:600;
                margin-bottom:10px;
            }
            
            p,li{
                font-size: 16px; 
                margin:5px 0px;
              }


          }



          .boxes{
              display:flex;
              flex-wrap:wrap;
              margin-bottom:20px;

              .bx{
                border-radius:4px;
                padding:5px 10px;
                display:flex;
                align-items:center;
                border:1px solid #D8D5DB;
                margin-right:15px;


                  svg{
                      margin-right:5px;
                  }
              }
          }


      }


        .box-details{
              border-radius:10px;
              border:1px solid #D8D5DB;
              padding:20px;
              max-height:600px;
              min-height:200px;
              width:300px;
              min-width:300px;

              .center{
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;

                  .subtitle{
                    margin-top:10px;
                  }
              }

               .btn.bordered{
                  border:1px solid var(--blue);
               }

               .subtitle{
                  font-size:20px;
                  font-weight:600;
                  margin-bottom:10px;
               }

               .bar{
                  margin:20px 0px !important;
                  width:100%;
                  height:1px;
                  background:#D8D5DB;
               }

             ul{
                padding:0px;
                margin:0px;

                  
               li{
                list-style:none;
                display:flex;
                margin:10px 0px;

                .text{
                    padding-left:15px;

                    small{
                        font-size:14px;
                    }
                     
                      h5{
                         font-size:15px;
                         font-weight:600;
                      }
                }

                  .icon{
                      width:50px;
                      height:50px;
                      background:#FCF6BD;  
                      border-radius:100%;
                      display:flex;
                      align-items:center;
                      justify-content:center;

                        svg{
                            width:35px;
                            height:35px;
                        }
                  }
                }

                 


             }





        }
   }

`;

export default CarrerJobDetails
