import { Avatar } from '@mui/material';
import React from 'react'
import { styled } from 'styled-components';
import {AiFillStar} from "react-icons/ai"; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';


const Images = [
    require("../../Assets/images/avatars/user-1.jpg"), 
    require("../../Assets/images/avatars/user-3.jpg"), 
  ];
  

function Testimonials() {
  return (
     <Container>
          <div className="wrapper">
            <div className="testimonials">
                  <div className="text-area">
                       <span>Testemunhas</span>
                       <h1>O que os nossos clientes pensam sobre nós</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum soluta alias libero quod? 
                        Nostrum assumenda illum maiores dolor repellendus veniam amet earum sed exercitationem necessitatibus, corporis nemo tempora sequi.</p>
                  </div>
                  <section>
                  <Swiper   spaceBetween={50}  slidesPerView={1} onSlideChange={() => console.log('slide change')}  onSwiper={(swiper) => console.log(swiper)}  >
                    <SwiperSlide>
                      <article>
                            <div className="text">
                                <p>
                                    A nossa presença em Angola, há mais de uma década, tem sido pautada por um forte investimento no desenvolvimento e capacitação dos nossos colaboradores. 
                                    Pretendemos ser a melhor empresa para trabalhar em Angola e estamos
                                    continuamente a melhorar a experiência do colaborador para garantir que atraímos os melhores talentos, os desenvolvemos,
                                    mas também que conseguimos retê-los
                                </p>
                            </div>
                            <div className="dets">
                                <div className="user">
                                    <Avatar src={Images[0]} sx={{width:60,height:60}} />
                                    <div className="name">Sara Pedro Lopes</div>
                                </div>
                                <div className="d-flex">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>  
                    <SwiperSlide>
                      <article>
                            <div className="text">
                                <p>
                                    A nossa presença em Angola, há mais de uma década, tem sido pautada por um forte investimento no desenvolvimento e capacitação dos nossos colaboradores. 
                                    Pretendemos ser a melhor empresa para trabalhar em Angola e estamos
                                    continuamente a melhorar a experiência do colaborador para garantir que atraímos os melhores talentos, os desenvolvemos,
                                    mas também que conseguimos retê-los
                                </p>
                            </div>
                            <div className="dets">
                                <div className="user">
                                    <Avatar src={Images[1]} sx={{width:60,height:60}} />
                                    <div className="name">Albernaz Domingos</div>
                                </div>
                                <div className="d-flex">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>  
                  </Swiper>  
                 </section>
            </div>
          </div>
     </Container>
  )
}


const Container = styled.div`
     width:100%;
     padding:40px 0px;
     min-height:300px;  

     .testimonials{
          display:flex;

    
    .text-area{
        padding-right:40px;

        span{
              font-size:18px;
              color:var(--blue);
        }

        h1{
            font-size:35px;
            line-height:45px;
            font-weight:bold;  
            margin:10px 0px;
        }
    }

       p{
          font-size:16px;
          color:#4F5D75 !important;
       }

          section{
              max-width:800px;

                article{
                     padding:20px;
                     border-left:8px solid var(--blue);
                     background:#ffff;
                     box-shadow:0px 3px 10px rgba(0,0, 0,0.4);

                     
                       p{
                        font-size:15px !important;
                      }

                     .dets{
                          display:flex;
                          justify-content:space-between;
                          align-items:center;

                          .d-flex{
                              svg{
                                 margin-right:10px;
                                 font-size:20px;
                                 color:gold;
                              }
                          }

                            .user{
                                 display:flex;
                                 align-items:center;

                                  .name{
                                       font-size:16px;
                                       font-weight:600;
                                       margin-left:10px;
                                  }
                            }
                     }
                }
          }
     }

 
`;

export default Testimonials