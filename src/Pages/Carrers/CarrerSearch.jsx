import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer';
import NavbarCarrers from './Components/NavbarCarrers';
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Form } from 'react-bootstrap';
import {BsPinMapFill,BsBuildingCheck,  BsSearch} from "react-icons/bs";
import {BiMap} from "react-icons/bi";
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

function CarrerSearch() {

    document.title = "StandardJobs";

    const Jobs =  [
         {title:"Desenvolvedor de softwares fullstack"},
         {title:"Desenvolvedor de softwares fullstack"},
         {title:"Desenvolvedor de softwares fullstack"}, 
         {title:"Desenvolvedor de softwares fullstack"},
         {title:"Desenvolvedor de softwares fullstack"}, 
    ]

    let active = 2;
    let items = [];
    for (let number = 1; number <= 8; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }

  return (
    <section>
    <Container>
           <NavbarCarrers /> 
           <div className="cover  carrer-home h1">
              <ImageLazyLoading height="300" source="https://www.aljazeera.com/wp-content/uploads/2023/03/story_15_final.jpg?resize=1620%2C1080&quality=80" />
               <div className="cover-over">
               <div className="wrapper">
                   <div className="content"> 
                   <div className='title' >Emcontre o seu <span className="span text-blue">StandardJob</span> de sonho</div>
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
           <div className="jobs-area">
            <div className="wrapper">
                <div className="job-content">
                     <div className="search-bar">
                        <div className="space">
                               <div><h1 className="sub-title">Filtros</h1></div>
                              <div><span className="text-blue">ver mais</span> </div>
                        </div>
                        <br />
                        <ul>
                            <h1 className="sub-title">Tipo de emprego</h1>
                            <li><Form.Check   type="checkbox"  id={`default-1`} label={`Tempo integral`} /></li>
                            <li><Form.Check checked  type="checkbox"  id={`default-2`} label={`Meio periodo`} /></li>
                            <li><Form.Check checked  type="checkbox"  id={`default-3`} label={`Home office`} /></li>
                        </ul>
                        <ul>
                            <h1 className="sub-title">Experiencia de trabalho</h1>
                            <li><Form.Check checked  type="checkbox"  id={`default-4`} label={`Nivel básico`} /></li>
                            <li><Form.Check   type="checkbox"  id={`default-5`} label={`Nivel Intermediario`} /></li>
                            <li><Form.Check   type="checkbox"  id={`default-6`} label={`Nivel avançado`} /></li>
                        </ul>
                        <ul>
                            <h1 className="sub-title">Especialidades</h1>
                            <li><Form.Check   type="checkbox"  id={`default-7`} label={`Animação`} /></li>
                            <li><Form.Check checked  type="checkbox"  id={`default-8`} label={`Designer grafico`} /></li>
                            <li><Form.Check checked type="checkbox"  id={`default-9`} label={`Web design`} /></li>
                            <li><Form.Check checked  type="checkbox"  id={`default-10`} label={`Fullstack developer`} /></li>
                            <li><Form.Check   type="checkbox"  id={`default-11`} label={`Recursos Humanos`} /></li>
                            <li><Form.Check   type="checkbox"  id={`default-12`} label={`Talent aquicision`} /></li>
                        </ul>
                        <button className="col-lg-12 btn bg-blue text-light">Aplicar Filtros</button>
                     </div>
                     <div className="main-jobs">
                          {Jobs.map((item, index)=>(
                              <article key={index} >
                                 <div className="space">
                                  <div>
                                  <Link to="/carrerjobdetails"><div className="title">{item.title}</div></Link>
                                  <div className="small-dets">
                                      <div className="d-flex"><BsBuildingCheck/> Talatona Standard Bank Building</div>
                                      <div className="d-flex"><BiMap/> Angola , Luanda </div>
                                  </div> 
                                  </div>
                                  <div>
                                    <Link to="/carrerjobdetails"><button className="btn text-blue">Ver</button></Link>
                                </div>
                                 </div>
                                  <div className="space">
                                       <div className="text">
                                           <p>
                                           Procuramos desenvolvedores de software qualificados que prosperem em um ambiente de equipe ágil e 
                                           altamente colaborativo. Os desenvolvedores da Consumer Cellular projetam soluções técnicas ...
                                           </p>
                                       </div> 
                                  </div>
                                  <div className="space">
                                    <div className="d-flex fx">
                                         <div className="bd warning">Tempo integral</div>
                                         <div className="bd primary">Nivel  básico</div>
                                    </div>
                                    <div className="d-flex"><small>Publicado 2 dias atrás</small> </div>
                                  </div>
                              </article>
                          ))}
                        <Pagination>{items}</Pagination>
                     </div>
                </div>
            </div>
         </div>
       </Container>      
     <Footer />
    </section>
  )
}


const Container = styled.div`
background:#F8F9FA;
  
.jobs-area{ 
    padding:20px 0px;

   .job-content{
        width:100%;
        display:flex;
        justify-content:space-between;


      .search-bar{
           min-width:350px;
           background:#ffff;  
           min-height:440px;
           margin:15px 0px;
           box-shadow:0px 3px 10px rgba(0,0,0,0.1);
           padding:20px; 
           max-height:700px;

            .sub-title{
                font-size:18px;
                font-weight:600;
            }
        }

         

        .main-jobs{
            width:90%;
            min-height:440px;
            margin:15px 0px;
            padding-left:30px; 
            display:block;

            .page-link{
                color:var(--black);
            }

            .page-item.active{
                .page-link{
                    background:var(--blue) !important;
                    color:#ffff;
                }
            }

              article{
                margin-bottom:30px;
                padding:20px;
                background:#ffff;  
                min-height:40px; 
                box-shadow:0px 3px 10px rgba(0,0,0,0.1);

                  .title{
                    font-size:18px;
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

                  p{
                    font-size: 16px;
                    color: #4F5D75!important;
                  }

                  button{
                     border:1px solid var(--blue);
                     min-width:150px;
                  }

                  small{
                    font-size:15px;
                    color:grey;
                  }

                 .space{
                      align-items:flex-start;
                 }

                 .bd{
                      padding:5px 10px; 
                      margin-right:15px;
                      font-size;15px;
                 }

                 .bd.warning{
                    background:#FCF6BD;  
                 }

                 .bd.primary{
                    background:#CAF0F8;  
                 }




                  
              }
        }

        ul{
            padding:0px;
            margin:10px 0px;
            margin-bottom:20px;
            
            li{
                list-style:none;  
                margin:8px 0px;
                font-size:15px;
                color: #4F5D75 !important;
            }
        }


    }
}

.cover{
    position:relative;
    width:100%;
    height:300px;


      img{
          width:100%;
          height:300px; 
          object-fit:cover;
      }


      .content{
          width:100%; 
          text-align:center;
          justify-content:center;
          align-items:center;
          display:flex;
          flex-direction:column;
          text-align:center;
      }
 

      .cover-over{
          position:absolute;
          top:0px;
          left:0px;
          width:100%;
          height:100%;
          background:rgba(0,0,0,0.4);
          padding-top:70px; 

          .title{
              width:100%; 
              font-weight:600;
              color:#ffff; 
              font-size:30px;
              max-width:1200px; 
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
                  width:100%;
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
                      width:100%;
                      align-items:center;
                  }

                   .icon{
                      padding:0px 10px; 
                   }
             }
      }



   }
`;

export default CarrerSearch
