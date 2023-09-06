import React from 'react'
import { styled } from 'styled-components'
import {MdSecurity, MdOutlineDevices} from "react-icons/md";
import {FaRegSmile} from "react-icons/fa";

function Trusted() {
  return (
     <Container>
        <div className="wrapper trusted">
             <div className="text-area">
                  <div>
                     <h1>O Banco com os serviços financeiros mais confiaveis</h1>
                  </div>
                  <div>
                      <p>
                        Somos o maior Banco no continente Africano com 160 anos de experiência.
                         A nossa actividade em Angola iniciou-se no ano de 2010 e, desde então, temos 
                        trabalhado para consolidarmos a nossa presença como instituição de referência no
                         mercado.
                      </p>
                  </div>
             </div>
             <div className="box-container">
                   <div className="box">
                       <div className="icon"><MdSecurity/> </div>
                       <h2>Confiavel e Seguro</h2>
                       <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Blanditiis mollitia dolorum recusandae debitis sint amet neque quasi,
                          sequi repellat.
                        </p>
                   </div>
                   <div className="box">
                       <div className="icon"><FaRegSmile/> </div>
                       <h2>Muito facil de usar</h2>
                       <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Blanditiis mollitia dolorum recusandae debitis sint amet neque quasi,
                          sequi repellat.
                        </p>
                   </div>
                   <div className="box">
                       <div className="icon"><MdOutlineDevices/> </div>
                       <h2>Multiplataforma</h2>
                       <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Blanditiis mollitia dolorum recusandae debitis sint amet neque quasi,
                          sequi repellat.
                        </p>
                   </div>
             </div>
        </div>
     </Container>
  )
}

const Container = styled.div`
     width:100%;
     padding:60px 0px;
     min-height:500px;
     background:var(--black);
     color:#ADACB5 !important;


      h1, h2{
          color:#ffff;
      }


      .box-container{
          display:flex;
          flex-wrap:wrap;
          justify-content: space-between; 
          margin-top:20px;

          .box{
              width:470px;
              border-radius:10px;
              margin:15px 0px;
              border:1px solid #ADACB5;
              height:270px;
              padding:20px;

              h2{
                  color:var(--blue); 
                  background: -webkit-linear-gradient(#eee, var(--blue));
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
              }

              p{
                 font-size:15px;
                 letter-spacing:1px;
              }

                svg{
                    width:60px;
                    height:60px;
                    margin-bottom:20px;
                    color:#ffff;
                }
          }
      }

      .text-area{
        display: flex; 
        justify-content: space-between;  
        width:100%;

        h1{
            font-size:35px;
            line-height:45px;
        }

          div{
              max-width:550px;
          }
      }
`;

export default Trusted