import React, { useEffect } from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';  
import {AiOutlineClose} from "react-icons/ai";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';  
import EmojiPicker from 'emoji-picker-react';
import {BsSend,BsSticky,BsEmojiSmile} from "react-icons/bs";
import GifPicker from 'gif-picker-react';


function MailerComposeChat(props) {
   const [Show, setShow]= useState(false);
   const [Text, setText]= useState("");
   
  useEffect(()=>{
    setShow(props.Show*1 === 1 ? true : false);
    setText(props.text);
 },[props]);

  


   const [ToggleEmoji, setToggleEmoji] = useState(false);
   const [ToggleGif, setTogglGif] = useState(false);


  return (
     <Container  className={Show === true ? "mailer-chat" : "mailer-chat d-none"}>
        <div className="chat-header">
             <div><h1>Compor nova mensagem </h1>  </div>
             <div onClick={()=>setShow(false)}><AiOutlineClose/></div>
        </div>
        <div className="chat-form">
            <Form>
                <div className="content-form">
                   <Form.Control placeholder='Destinatarios' />
                   <Form.Control placeholder='Assunto' />
                </div>
               <SunEditor />
              <div className="space mt-2"> 
              <div className="d-flex">
                <div className="toogle"> 
                   <div className="btn emj" onClick={()=>setTogglGif(ToggleGif === true ? false : true)} ><BsSticky/></div>
                   {ToggleGif  ? <GifPicker tenorApiKey={"AIzaSyAs6jyixfg6l_1hMawHp317rRdN0Fpc1dg"} /> : <></> }
                </div>
                  <div className="toggle ml-1">
                     <div className="emj btn" onClick={()=>setToggleEmoji(ToggleEmoji === true ? false : true)} ><BsEmojiSmile/></div>
                      {ToggleEmoji  ? <EmojiPicker /> : <></> }
                  </div> 
               </div>
               <div className='d-flex'>
                 <button  className="btn bg-blue ml-2 text-light">enviar</button>
               </div>
              </div>
            </Form>
        </div>
     </Container>
  )
}

const Container = styled.div`
    position:fixed;
    bottom:0px;
    right:50px;
    width:550px;
    height:580px; 
    background:#fff;
    z-index:10000 !important;
    box-shadow:0px 3px 10px rgba(0,0,0,0.2);
    border-top-right-radius:10px;
    border-top-left-radius:10px;


    button{
        border-radius:10px !important;
    }

    .toggle{
        position:relative;   
    }

      .chat-header{
        display:flex;
        align-items:center;
        padding:10px;
        justify-content:space-between;
        border-top-right-radius:10px;
        border-top-left-radius:10px;
        background:#F8F9FA;

          h1{
              font-size:16px;
              margin:0px;
              color:var(--black);
          }

          svg{
            fill:var(--black);
            cursor:pointer;
            width:25px;
            height:25px;
          }
      }

      form{
          height:450px;
          width:100%; 
          padding:10px;

          .d-flex{
              .btn{
                  display:flex;
                  align-items:center;

                    svg{
                        width:21px;
                        height:21px;
                        margin:0px;
                    }
              }
          }

          .se-navigation{
            display:none !important;
         }

          .sun-editor{
            border:none;

            .se-container{ 
             display:flex;
             flex-direction:column-reverse;
             min-height:380px;

             
              .se-wrapper{
                  min-height:260px;   
               }
             }
           }


            .content-form{ 

                input{
                    border-top:none !important; 
                    border-left:none !important; 
                    margin:5px 0px;
                    border-radius:0px;
                    border-right:none !important; 
                    box-shadow:unset !important;
                    font-size:15px;
                }
            }
      }
`;

export default MailerComposeChat
