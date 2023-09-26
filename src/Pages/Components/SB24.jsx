import React from 'react'
import { styled } from 'styled-components';
import {AiOutlineClockCircle, AiOutlineArrowRight} from "react-icons/ai";
import ImageLazyLoading from './ImageLazyLoading';

function SB24() {
  return (
    <Container>
        <div className="wrapper news">
        <div className="text-area">
                <div>
                    <h1>Se estava a procura, acredite já encontrou</h1>
                    <p>Noticias sobre  standard Bank apenas aqui.</p>
                </div> 
            </div>
           <div className="cards-wrapper">
                <article>
                     <div className="image"> 
                         <ImageLazyLoading height={450} source="https://www.born.pt/folder/galeriatrabalho/ficheiro/115_Prancheta%201_1v352mslc5.png"  /> 
                     </div>
                     <div className="details">
                        <h2>Os melhores , estão sempre nos melhores locais ...</h2>
                        <div className="date"><AiOutlineClockCircle/>  14 dias atras</div>
                        <p>Aperiores, eius quam numquam debitis illo omnis temporibus error inventore. Nisi perferendis vel dolore, nam unde accusamus sint saepe voluptas, dolor temporibus enim.</p>
                        <button className="btn bg-blue text-light mt-2">Saiba mais <AiOutlineArrowRight/> </button>
                     </div>
                </article>

                <article>
                     <div className="image">
                        <ImageLazyLoading height={450} source="https://www.born.pt/folder/galeriatrabalho/ficheiro/115_Prancheta_mhh5whgrq6.png"  /> 
                     </div>
                     <div className="details">
                        <h2>Os melhores , estão sempre nos melhores locais ...</h2>
                        <div className="date"><AiOutlineClockCircle/>  14 dias atras</div>
                        <p>Aperiores, eius quam numquam debitis illo omnis temporibus error inventore. Nisi perferendis vel dolore, nam unde accusamus sint saepe voluptas, dolor temporibus enim.</p>
                        <button className="btn bg-blue text-light mt-2">Saiba mais <AiOutlineArrowRight/> </button>
                     </div>
                </article>

                <article>
                     <div className="image"> 
                         <ImageLazyLoading height={450} source="https://www.born.pt/folder/galeriatrabalho/ficheiro/115_Prancheta3_oylrnnxqxg.png"  /> 
                     </div>
                     <div className="details">
                        <h2>Os melhores , estão sempre nos melhores locais ...</h2>
                        <div className="date"><AiOutlineClockCircle/>  14 dias atras</div>
                        <p>Aperiores, eius quam numquam debitis illo omnis temporibus error inventore. Nisi perferendis vel dolore, nam unde accusamus sint saepe voluptas, dolor temporibus enim.</p>
                        <button className="btn bg-blue text-light mt-2">Saiba mais <AiOutlineArrowRight/> </button>
                     </div>
                </article>

           </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
     width:100%;
     padding:60px 0px;
     min-height:500px; 
     background-color:var(--black);
     color:#ffff;

     .text-area{ 
        width:100%;

        h1{
            font-size:35px;
            line-height:45px;
            font-weight:bold;
        } 
      }


      .cards-wrapper{
           margin-top:20px;
           display:flex;
           flex-wrap:wrap;

             article{
               width:470px;
               background:#ffff;  
               height:740px;
               margin:15px;
               
               padding:20px;
               
                 img{
                      width:100%;
                      height:450px;
                      background:var(--blue); 
                 }

                 .details{
                    color:var(--black); 

                     h2{
                          font-size:18px;
                          font-weight:600;
                          margin:8px 0px;
                     }

                     .date{
                          color:var(--blue);
                          margin:7px 0px;

                            svg{
                                margin:0px;
                                margin-right:5px;
                            }
                     }

                     p{
                        font-size:16px;
                        color:#4F5D75 !important;
                     }
                 }
            }
      }



`;


export default SB24


