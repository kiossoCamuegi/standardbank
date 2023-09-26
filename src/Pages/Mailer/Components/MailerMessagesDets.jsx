import { Avatar } from '@mui/material';
import React, { forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import {BsInfoCircle,BsReply,BsArrow90DegRight} from "react-icons/bs";
import {AiOutlineDelete, AiOutlineClose, AiOutlineEdit} from "react-icons/ai";
import {LiaEllipsisVSolid} from "react-icons/lia";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ImageLazyLoading from '../../Components/ImageLazyLoading'
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const MailerMessagesDets = forwardRef((props, ref) =>{
  const Message = props.item; 
  const [Show, setShow]= useState(true);
  const [ShowModal, setShowModal]= useState(true);

  const Images  = [
    "https://image-prod.iol.co.za/16x9/800/Standard-Bank-s-participation-in-the-funding-of-the-5-billion-R77-4bn-East-Africa-Crude-Oil-Pipeline-Eacop-project-would-depend-on-environmental-and-social-assessments-and-on-the-project-meeting-the-Equator-Principles-requirements-the-bank-said-yesterday-Picture-Karen-Sandison-African-News-Agency-ANA?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/d5daef59-307f-5721-9c6f-357a8df8f0bf&operation=CROP&offset=0x0&resize=600x341",
    "https://www.crestashoppingcentre.co.za/wp-content/uploads/2020/07/standard-01_20190429111810_large.jpg",
    "https://www.dailymaverick.co.za/wp-content/uploads/2022/08/BM-news-neesa-std-bank-interim-results.jpg",
    "https://www.jornaldeangola.ao/fotos/frontend_1/noticias/10cc_standard_bank_11317152356407022831d45.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5ff02f40550451.5783f76ad6cbd.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e35e635-7e67-4aee-bb4d-5b8f50211fa6/df8rhrk-e453b4f2-1c9b-40b2-8fc6-1576a1d34b3a.jpg/v1/fill/w_960,h_552,q_75,strp/standard_bank_logo_remake_by_gtrbfdie_df8rhrk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTUyIiwicGF0aCI6IlwvZlwvM2UzNWU2MzUtN2U2Ny00YWVlLWJiNGQtNWI4ZjUwMjExZmE2XC9kZjhyaHJrLWU0NTNiNGYyLTFjOWItNDBiMi04ZmM2LTE1NzZhMWQzNGIzYS5qcGciLCJ3aWR0aCI6Ijw9OTYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.0MOoQwt43HWqwPi3EIaOITpqgjI8pqrhIivI6wuuDno",
  ]


  useEffect(()=>{
      setShow(props.show ? true : false);
      setShowModal(props.show ? true : false);
  },[props]);


  const ChangeData =  ()=>{ 
     props.ShowChat(true); 
  }

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);



  return ( 
      <>  
      {window.innerWidth <= 900 ? <Offcanvas show={ShowModal} onHide={handleClose}>
        <Offcanvas.Header closeButton> 
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Content>
          <div className="details-box-x">
           <div className="d-block">
               <div className="d-flex">
                   <Avatar  src={Message.picture} sx={{width:55,height:55}} sr={""} />
                   <div className="d-block ml-2">
                      <div className="name">{Message.name}</div>
                      <span>{Message.time}</span>
                   </div>
               </div>
               <div className="d-flex mt-2">
                  <button className="btn"><BsInfoCircle/></button>
                  <button className="btn ml-1"><AiOutlineDelete/></button>
                  <button className="btn ml-1"><AiOutlineEdit/></button>
                  <button className="btn ml-1"><LiaEllipsisVSolid/></button>
                  <button onClick={()=>setShow(false)} className="btn ml-1 text-danger"><AiOutlineClose/></button>
               </div>
           </div>
           <div className="dets mt-4"> 
                 <div className="description mt-4"> {Message.message} </div>
                <div className="assets mt-4">
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}   >
                <Masonry columnsCount={3} gutter="10px">
                    {Images.map((item, index)=>(
                          <div key={index}>
                              <ImageLazyLoading height="300" source={item} />  
                          </div>
                     ))}
                </Masonry>
            </ResponsiveMasonry>
             <div className="mt-2">
                <small> <Link to="#">Baixe os documentos anexados nesta mensagem em um click</Link></small>
             </div>
                </div>
               <div className="d-flex mt-4">
                   <button className="btn text-white bg-blue"  onClick={ChangeData}> <BsReply/><span className='ml-1' >Responder</span></button>
                   <button className="btn text-blue bg-light ml-2"><BsArrow90DegRight/><span className='ml-1' >Prosseguir</span></button>
               </div>
               <br /><br />
           </div>
        </div>
          </Content>
        </Offcanvas.Body>
      </Offcanvas> : <></>}
      <Container  className={Show === true ? "mail-dets" : "mail-dets d-none"}>
      <div className="details-box-x">
        <div className="space">
            <div className="d-flex">
                <Avatar  src={Message.picture} sx={{width:55,height:55}} sr={""} />
                <div className="d-block ml-2">
                   <div className="name">{Message.name}</div>
                   <span>{Message.time}</span>
                </div>
            </div>
            <div className="d-flex">
               <button className="btn"><BsInfoCircle/></button>
               <button className="btn ml-1"><AiOutlineDelete/></button>
               <button className="btn ml-1"><AiOutlineEdit/></button>
               <button className="btn ml-1"><LiaEllipsisVSolid/></button>
               <button onClick={()=>setShow(false)} className="btn ml-1 text-danger"><AiOutlineClose/></button>
            </div>
        </div>
        <div className="dets mt-4">
              <h4><b>{Message.subject}</b></h4>
              <div className="description mt-4"> {Message.message} </div>
             <div className="assets mt-4">
             <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}   >
             <Masonry columnsCount={3} gutter="10px">
                 {Images.map((item, index)=>(
                       <div key={index}>
                           <ImageLazyLoading height="300" source={item} />  
                       </div>
                  ))}
             </Masonry>
         </ResponsiveMasonry>
          <div className="mt-2">
             <small> <Link to="#">Baixe os documentos anexados nesta mensagem em um click</Link></small>
          </div>
             </div>
            <div className="d-flex mt-4">
                <button className="btn text-white bg-blue"  onClick={ChangeData}> <BsReply/><span className='ml-1' >Responder</span></button>
                <button className="btn text-blue bg-light ml-2"><BsArrow90DegRight/><span className='ml-1' >Prosseguir</span></button>
            </div>
        </div>
        </div> 
      </Container>
     </>   
  )
})


const Container = styled.div`
   width:100%;
   min-height:88vh; 
   padding-left:30px;
   
     .details-box-x{ 
          min-width:700px;  
          width:100%;
          height:85vh;
          max-height:85vh;
          overflow-y:auto; 
          background:#ffff;
          border-radius:10px; 
          padding:20px;

          &&::-webkit-scrollbar-thumb{
            width:10px;
            background:#dee2e6;
          }
          

          &&::-webkit-scrollbar{
              width:4px;
              background:#ffff;
          }

        .name{
            font-size:15px;
            font-weight:600;
          }

          span, .time{
              font-size:14px; 
          }

            .dets{
 
             .assets{
              max-width:500px;
               img{
                 width:100%;
                 border-radius:10px;
               }
             }

              h4{
                font-size:20px;
              }

              .description{
                font-size: 15px;
                color: #4F5D75 !important; 
                margin-top:10px;
              }

                button svg{
                    width:20px;
                    height:20px;
                    margin-right:10px;
                }
            }
     }
`;

const Content = styled.div`
   width:100%;
   min-height:88vh;  
   
     .details-box-x{  
          width:100%;
          height:85vh; 
          background:#ffff;
          border-radius:10px;  

          &&::-webkit-scrollbar-thumb{
            width:10px;
            background:#dee2e6;
          }
          

          &&::-webkit-scrollbar{
              width:4px;
              background:#ffff;
          }

        .name{
            font-size:15px;
            font-weight:600;
          }

          span, .time{
              font-size:14px; 
          }

            .dets{
 
             .assets{
              max-width:500px;
               img{
                 width:100%;
                 border-radius:10px;
               }
             }

              h4{
                font-size:20px;
              }

              .description{
                font-size: 15px;
                color: #4F5D75 !important; 
                margin-top:10px;
              }

                button svg{
                    width:20px;
                    height:20px;
                    margin-right:10px;
                }
            }
     }
`;

export default MailerMessagesDets
