import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Components/Navbar';
import {FaSimCard} from "react-icons/fa";
import {AiFillCaretUp} from "react-icons/ai";
import {BiLogoVisa} from "react-icons/bi";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Trusted from './Components/Trusted';
import Dreams from './Components/Dreams';
import AppMock from './Components/AppMock';
import SB24 from './Components/SB24';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
const Wave =  require("../Assets/images/chartwave.png");
const Logo =  require("../Assets/images/logo2.png");

const Images = [
  require("../Assets/images/avatars/user-1.jpg"),
  require("../Assets/images/avatars/user-2.jpg"),
  require("../Assets/images/avatars/user-3.jpg"),
  require("../Assets/images/avatars/user-4.jpg"),
  require("../Assets/images/avatars/user-5.jpg"),
  require("../Assets/images/avatars/user-6.jpg"),
  require("../Assets/images/avatars/user-7.jpg"),
  require("../Assets/images/avatars/user-8.jpg"),
  require("../Assets/images/avatars/user-9.jpg"),
  require("../Assets/images/avatars/user-10.jpg"), 
];




 


function Home() {
  return (
    <Container>
         <Navbar/>
         <div className="header">
              <div className="wrapper">
                  <div className="header-content">
                     <div className="header-text">
                        <div>
                        <h1>A melhor solução Financeira  Para o seu Negocio</h1>
                         <p>Disponibilizamos-lhe uma vasta gama de soluções que fazem você gastar menos tempo no Banco e mais tempo com a sua
                           Disponibilizamos-lhe uma vasta gama de soluções que fazem você gastar menos tempo no Banco e mais tempo com a sua vida.</p>
                         <div className="d-flex">
                             <button className="btn text-light bg-blue">Baixar aplicativo</button>
                             <button className="btn text-blue btn bg-light">Saiba mais no blog</button>
                         </div>
                        </div>
                        <div>
                       <div className="col-lg-4 mt-4">
                       <AvatarGroup max={7}>
                          {Images.map((item ,index)=>{
                              return(<Avatar alt="Remy Sharp" src={item} />);
                          })}
                        </AvatarGroup>
                       </div>
                           <p className='mt-2'> Junte-se a mais de 40.0000.000 Clientes a volta do mundo.</p>
                        </div>
                     </div>
                     <div className="header-image">
                      <div className="bx bx-1">
                          <img src={Wave} alt="" />
                          <div className="block">
                               <span>Total Visitas</span>
                                 <h2 className="d-flex">22.985 
                                  <small className="text-success">
                                    <div className="caret"><AiFillCaretUp /> </div>
                                     11%
                                  </small> 
                              </h2>
                          </div>
                      </div>
                         <div id="simcard">
                             <div className="sim-icon">
                               <FaSimCard />
                             </div>
                             <div className="icon">
                                 <img src={Logo} alt="" />
                             </div>
                             <div>
                             <div>
                                 <div className='tx' >Standard Bank card</div>
                             </div>
                             <div className="header-footer">
                                   <div className="header-over">
                                        <div>0948 **** ****</div>
                                        <div><BiLogoVisa /> </div>
                                   </div> 
                             </div>
                             </div>
                         </div>
                         <div className="bx bx-2">
                             <aside>
                                <div className="block">
                                  <span>Clientes</span>
                                    <h2 className="d-flex">983.358 
                                      <small className="text-success">
                                        <div className="caret"><AiFillCaretUp /> </div>
                                        32%
                                      </small> 
                                  </h2>
                                </div>
                                <br />
                                <h3>Particular</h3>
                                  <div className="users">

                                       <div className="us">
                                          <Avatar src={Images[3]} sx={{width:45,height:45}} />
                                          <div className="txt">
                                              <h4>+958 585</h4>
                                              <span>Mateus ananda</span>
                                          </div>
                                       </div>
                                       <div className="us">
                                          <Avatar src={Images[2]} sx={{width:45,height:45}} />
                                          <div className="txt">
                                              <h4>+978 578</h4>
                                              <span>Sintio lopes</span>
                                          </div>
                                       </div>

                                  </div>
                             </aside>
                         </div>
                     </div>
                  </div>
              </div>
         </div>
         <Trusted/>
         <Dreams/>
         <AppMock />
         <SB24 />
         <Testimonials/>
         <Footer/>
    </Container>
  )
}


const Container = styled.div`




  .header{
     padding:20px 0px;

      .header-content{
         display:flex;
         justify-content: space-between; 


          #simcard{ 

            .sim-icon{
                width:100%; 
                padding-left:10px;

                  svg{
                    transform:rotate(-270deg);
                    margin-bottom:5px;
                  }
            }

            .header-footer{
                svg{
                    font-size:50px;
                }
            }


            .tx{
                font-size:16px;
                padding:10px;
            }

            .icon{
              display:flex;
              justify-content:center; 
              align-items:center; 
              width:100%; 
  
                img{
                    width:95px;
                    height:95px;
                    margin-right:60px; 
                    margin-top:50px;
                }
            }
          }


         .header-over{
            font-size:20px;
            display:flex;
            justify-content: space-between; 
            padding:20px;
            align-items:center;
            height:100%;   
         }


         .header-image{


              .bx{
                  padding:20px;
                  background:#ffff;
                  color:var(--dark);
                  min-height:100px;
                  box-shadow:0px 3px 10px rgba(0,0,0,0.2);
                  border-radius:6px;
                  position:absolute;
                  z-index:10;  

                  h3, h4{
                    font-size:15px !important;
                    margin:5px 0px;
                    font-weight:bold;
                   }



                   .users{

                        .us{
                            display:flex;
                            margin:10px 0px;

                               .txt{
                                   padding-left:10px;

                                   h4{
                                       margin:0px;
                                   }

                                     span{
                                        font-size:12px;
                                        margin:0px;
                                     }
                               }
                        }
                   }


                     .block{  

                        span{
                          color:#4F5D75 !important;
                          font-size:16px;
                        }

                         h2{
                             font-size:22px;
                             margin:0px;
                             display:flex;
                             align-items:flex-end;
                             font-weight:bold;
                             margin-top:4px;
                              
                               small{
                                   font-size:15px;
                                   display:flex;
                                   margin-left:5px;
                                   color:#64DFDF !important;

                                   svg{
                                      margin:0px 5px;
                                   }
                               }
                         }
                     }
              }

              .bx-1{
                top:60px;
                left:-100px;
                min-width:300px;
                display:flex;
                align-items:center;

                  img{
                      width:100px;
                      margin-right:20px; 
                      max-height:60px;
                  }
              }



              .bx-2{
                width:220px;
                top:190px; 
                height:250px; 
                right:20px !important;
              }
         }

         .header-text{
            max-width:800px;
            display: flex; 
            justify-content: space-between;  
            flex-direction: column; 


              h1{
                  font-size:55px;
                  font-weight:600;
                  margin-top:70px;
                  margin-bottom:40px;
              }

              P{
                  color:#4F5D75 !important;
                  max-width:700px;
              }

              .d-flex{
                  margin-top:40px;

                    .btn{
                        margin-right:20px;
                    }
              }
         }
      }
  }

`;


export default Home