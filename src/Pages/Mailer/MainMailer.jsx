import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MailerNavbar from './Components/MailerNavbar';
import MailerMenu from './Components/MailerMenu';
import MailerMessages from './Components/MailerMessages';
import MailerMessagesDets from './Components/MailerMessagesDets';
import MailerComposeChat from './Components/MailerComposeChat';

function MainMailer() {
  document.title  = "StandardBank - mailer";
  const [Show, setShow] = useState(false);
  const [ShowChat, setShowChat]  = useState(0);
  const [Message, setMessage] = useState({});
  const [Text, setText] = useState(""); 

  const GetMessage = (e)=>{
    setShow(true);
    setMessage(e);  
    setShow(true);
    setShowChat(0);
  }

 
  const GetShowChatStatus = ()=>{ 
     setShowChat(1);
     setText("code = "+(Math.random() * 100)) 
  }


 
  return (
    <Container className='sdb-mailer'>
          <MailerNavbar/>
          <div className="content">
             <MailerMenu ShowChat={GetShowChatStatus} />
             <div className="content-box">
                <MailerMessages Data={GetMessage}   />
                 <MailerMessagesDets ShowChat={GetShowChatStatus} item={Message} show={Show} /> 
             </div>
          </div>
          <MailerComposeChat text={Text} Show={ShowChat} />
    </Container>
  )
}


const Container = styled.div`
    width:100%;
    display:block;
    

    

    .content{ 
        display:flex;
        width:100%;
        height:100vh;

        .content-box{
            padding:30px;
            padding-top:100px;
            min-height:80vh;
            max-height:100vh;
            overflow-y:auto;
            width:100%;
            background:#F8F9FA;
            display:flex;
        }
    }
`;


export default MainMailer
