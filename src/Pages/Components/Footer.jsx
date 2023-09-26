import React from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import {AiOutlineArrowRight} from "react-icons/ai";
const Logo =  require("../../Assets/images/logo4.png")

function Footer() {
  return (
    <Container>
        <div className="wrapper">
            <div className="footer-container">
                 <div className="footer-item footer-about">
                    <Link to="/"> <img src={Logo} alt="" /></Link>
                    <h2>Subscreva ao nosso Newsletter para receber mais informações</h2>
                    <Form>  
                        <Form.Control type="email" required placeholder="Email" /> 
                        <button className="btn bg-blue text-light"><AiOutlineArrowRight /> </button>
                    </Form>
                 </div>
                 <div className="footer-item">
                    <h1>Sobre nós</h1>
                    <ul>
                        <li><Link to="/carrers">Carreiras</Link></li>
                        <li><Link to="#">Localizações</Link></li>
                        <li><Link to="#">Parcerias</Link></li>
                        <li><Link to="#">Industrias</Link></li>
                        <li><Link to="#">Serviçõs</Link></li>
                        <li><Link to="/employeemailer">StandardBank mailer</Link></li>
                    </ul>
                 </div> 
                 <div className="footer-item">
                    <h1>Informações</h1>
                    <ul>
                        <li><Link to="#">Blog</Link></li>
                        <li><Link to="#">SB24</Link></li>
                        <li><Link to="#">Contactos</Link></li>
                        <li><Link to="#">Aplicativos</Link></li> 
                    </ul>
                 </div>
                 <div className="footer-item">
                    <h1>Redes sociais</h1>
                    <ul>
                        <li><Link to="#">Facebook</Link></li>
                        <li><Link to="#">Linkedin</Link></li>
                        <li><Link to="#">Instagram</Link></li>
                        <li><Link to="#">Youtube</Link></li>
                        <li><Link to="#">Twitter</Link></li>
                    </ul>
                 </div>
            </div>
            <ul className="footer-copyright">
                <li><Link to="#">Politicas de Privacidade</Link> </li>
                <li><Link to="#">Politicas de cookies</Link> </li>
                <li><Link to="#">Termos de uso</Link> </li>
            </ul>
        </div>
    </Container>
  )
}



const Container = styled.div`
     width:100%;
     padding:60px 0px;
     min-height:300px;  
     background:var(--black);
     color:#ffff;


     .footer-container{
          display:flex;
          justify-content:space-between;
          flex-wrap:wrap;
 

            .footer-item{
                width:250px;   
                
                  img{
                      max-width:300px;
                      margin-bottom:20px;
                  }

                  form{
                      background:#fff;
                      height:50px;
                      display:flex; 

                         input, button{
                            border:none;
                            min-width:70px;
                            height:50px;
                            margin:0px;
                         }

                         button{
                            font-size:20px;
                         }
                  }
            }



            .footer-item{
                h1{
                    font-size:20px;
                    font-weight:600;
                    margin-bottom:20px;
                }

                h2{
                     font-size:20px;
                     text-transform:uppercase;
                     font-weight:600;
                     line-height:40px;
                     margin-bottom:20px;
                }

                ul{
                    list-style:none;
                    padding:0px;
                    margin:0px;

                    li{
                        margin:10px 0px;
                        list-style:none; 

                          a{
                              color:#ffff;
                              font-weight:590;
                          }
                    }
                }
            }


            .footer-about{
                min-width:450px;
            }
 
     }

     .footer-copyright{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        margin:0px;
        margin-top:20px;
        padding:0px;

        li{
              margin:10px 20px;

              a{
                 color:#fff;
              }
        }
           
    }

     
`;


export default Footer