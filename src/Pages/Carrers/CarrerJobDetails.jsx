import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer';
import NavbarCarrers from './Components/NavbarCarrers'; 
import {BsPinMapFill, BsBriefcase, BsBuildingCheck,  BsPersonCircle, BsCalendarDay} from "react-icons/bs";
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
                       A tecnologia está em tudo o que fazemos. Contamos com ele para oferecer a excelência que nossos clientes merecem. E é por isso que nossos engenheiros de software são cruciais para todos os aspectos de nossas operações. Eles estão por trás dos algoritmos que alimentam nossa obsessão em oferecer excelentes produtos e serviços.
                       Você quer usar seu conhecimento para construir novas soluções de software? Você gosta de resolver problemas complexos? Em um ambiente inovador e de ritmo acelerado, há muitos projetos nos quais você pode trabalhar. E você pode se orgulhar de saber que melhorará a vida de milhões de pessoas em todo o mundo.
                        Conosco, você aprimorará suas habilidades e trabalhará com outras mentes talentosas. Você terá liberdade para explorar e transformar suas ideias em realidade. As possibilidades de aprendizagem são infinitas. Você construirá uma carreira sólida sabendo que tem todas as ferramentas para prosperar. 
                    </p> 
                   </div>
                   <div className="block-info">
                       <div className="subtitle">Responsabilidades</div>
                      <p>
                      - Mais de 5 anos de disciplinas de gerenciamento de projetos, incluindo escopo, cronograma, orçamento, qualidade, juntamente com experiência em gerenciamento de riscos e caminho crítico - Experiência no gerenciamento de projetos em equipes multifuncionais, construindo processos sustentáveis ​​e coordenando cronogramas de lançamento - Experiência na definição de KPIs/SLAs usados ​​para impulsionar negócios multimilionários e reporte à liderança sénior O Standard Bank está empenhado num local de trabalho diversificado e inclusivo. O Standard Bank é um empregador que oferece oportunidades iguais e não discrimina com base na raça, origem nacional, género, identidade de género, orientação sexual, estatuto de veterano protegido, deficiência, idade ou outro estatuto legalmente protegido. Para indivíduos com deficiência que desejam solicitar acomodação, visite https://www.Standard Bank.jobs/en/disability/us.
                        <br /><br />
                        Nossa remuneração reflete o custo da mão de obra em vários mercados geográficos dos EUA. O salário base para esta posição varia de US$ 119.000/ano em nosso mercado geográfico mais baixo até US$ 231.400/ano em nosso mercado geográfico mais alto. O pagamento é baseado em uma série de fatores, incluindo localização no mercado, e pode variar dependendo do conhecimento, habilidades e experiência relacionados ao trabalho. O Standard Bank é uma empresa de remuneração total. Dependendo do cargo oferecido, capital, pagamentos de adesão e outras formas de remuneração podem ser fornecidos como parte de um pacote de remuneração total, além de uma gama completa de benefícios médicos, financeiros e/ou outros.
                        <br /><br />
                        Para obter mais informações, visite https://www.aboutStandardBank.com/workplace/employee-benefits. Os candidatos devem se inscrever por meio de nosso site de carreiras interno ou externo.
                      </p>
                   </div>
                   <div className="block-info">
                       <div className="subtitle">Qualificações</div>
                       <ol  type='1'>
                           <li>5+ years of technical product or program management experience</li>
                           <li>7+ years of working directly with engineering teams experience</li>
                           <li>3+ years of software development experience</li>
                           <li>5+ years of technical program management working directly with software engineering teams experience</li>
                           <li>Experience managing programs across cross functional teams, building processes and coordinating release schedules</li> 
                       </ol>
                   </div>
                  </div>
                  <div className="box-details">
                      <div className="center">
                        <Avatar sx={{width:130,height:130}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1K9yNMZBYsLsTHzT-T9vubJJaS6EnlK1o5gUCE5myR7-YvozR1Ae35Uy5fdimU7f_kYM&usqp=CAU" />
                        <h2 className="subtitle">Standard Bank Group</h2>
                      </div>
                       <button className="btn col-lg-12 bg-blue text-light mt-2">Aplicar</button>
                       <button className="btn col-lg-12 text-blue bordered mt-2">Criar CV custumizado</button>
                       <div className="bar mt-2"></div>
                       <ul>

                           <li>
                              <div className="icon"><BsBriefcase/> </div>
                              <div className="text">
                                 <small>Tipo de emprego</small>
                                 <h5>Contrato</h5>
                              </div>
                           </li>
                           <li>
                              <div className="icon"><BsPinMapFill/> </div>
                              <div className="text">
                                 <small>Localização</small>
                                 <h5>Angola, Luanda</h5>
                              </div>
                           </li>
                           <li>
                              <div className="icon"><BsPersonCircle/> </div>
                              <div className="text">
                                 <small>Experiencia</small>
                                 <h5>Nivel avançado</h5>
                              </div>
                           </li> 
                           <li>
                              <div className="icon"><BsCalendarDay/> </div>
                              <div className="text">
                                 <small>Data de publicação</small>
                                 <h5>Jan 12, 2023</h5>
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
                            width:20px;
                            height:20px;
                        }
                  }
                }

                 


             }





        }
   }

`;

export default CarrerJobDetails
