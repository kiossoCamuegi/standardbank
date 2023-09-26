import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react'
import styled from 'styled-components';

const  MailerMessages  = forwardRef((props, ref) =>  {

    const MessagesList = [
        {
         name:"Marcelo pedro", time:"23 de Mar", subject:" Projecto Standard Bank Website redesign", 
         picture:require("../../../Assets/images/avatars/user-0.jpg"), status:false,
         msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
         message:<div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
            praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
            praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
         </div>
       }, 
       {
        name:"Sara Pouler", time:"23 de Mar", subject:"Repartição de tarefas", 
        picture:require("../../../Assets/images/avatars/user-1.jpg"), status:true,
        msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
        message:<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
     </div>
      }, 
      {
        name:"Kyle José Linux", time:"23 de Mar", subject:"Compartilhamento de acessos", 
        picture:require("../../../Assets/images/avatars/user-2.jpg"), status:true,
        msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
        message:<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
     </div>
      }, 
      {
        name:"Jacob Gomez Lindo", time:"23 de Mar", subject:"Projeto SB24", 
        picture:require("../../../Assets/images/avatars/user-3.jpg"), status:false,
        msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
        message:<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
     </div>
      }, 
      {
        name:"Mateus Domingos", time:"23 de Mar", subject:"Projeto SB24", 
        picture:require("../../../Assets/images/avatars/user-4.jpg"), status:true,
        msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países..."
      }, 
      {
        name:"Francisco Fidel", time:"23 de Mar", subject:"Projeto SB24", 
        picture:require("../../../Assets/images/avatars/user-5.jpg"), status:true,
        msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
        message:<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
     </div>
      }, 
      {
        name:"Marcelo pedro", time:"23 de Mar", subject:"Projeto SB24", 
        picture:require("../../../Assets/images/avatars/user-6.jpg"), status:true,
        msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
        message:<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
     </div>
      }, 
      {
        name:"Marcelo pedro", time:"23 de Mar", subject:"Projeto SB24", 
        picture:require("../../../Assets/images/avatars/user-7.jpg"), status:true,
        msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
        message:<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
     </div>
      }, 
      {
        name:"Marcelo pedro", time:"23 de Mar", subject:"Projeto SB24", 
        picture:require("../../../Assets/images/avatars/user-8.jpg"), status:true,
        msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
        message:<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
     </div>
      }, 
      {
        name:"Marcelo pedro", time:"23 de Mar", subject:"Projeto SB24", 
        picture:require("../../../Assets/images/avatars/user-9.jpg"), status:true,
        msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
        message:<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
     </div>
      }, 
      {
        name:"Marcelo pedro", time:"23 de Mar", subject:"Projeto SB24", 
        picture:require("../../../Assets/images/avatars/user-0.jpg"), status:false,
        msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
        message:<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
        praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
     </div>
      }, 
      {
       name:"Marcelo pedro", time:"23 de Mar", subject:"Projeto SB24", 
       picture:require("../../../Assets/images/avatars/user-1.jpg"), status:true,
       msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
       message:<div>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
       praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
       <br /><br />
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
       <br /><br />
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
       praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
    </div>
     }, 
     {
       name:"Marcelo pedro", time:"23 de Mar", subject:"Projeto SB24", 
       picture:require("../../../Assets/images/avatars/user-2.jpg"), status:true,
       msg:"Standard Bank Group Limited é um dos maiores grupos de serviços financeiros da África do Sul. Atua em 38 países...",
       message:<div>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
       praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
       <br /><br />
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Doloribus quaerat provident officia fugiat, </b>   praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate.
       <br /><br />
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quaerat provident officia fugiat, nobis exercitationem praesentium veniam explicabo. Ex nemo doloremque explicabo, corrupti consequuntur debitis fugiat delectus
       praesentium unde, impedit nostrum accusantium quisquam libero tenetur voluptatum? Voluptate, laborum cupiditate. 
    </div>
     },  
    ];

    const ChangeData =  (item)=>{
      props.Data(item) 
    }


  return (
    <Container className='mailer-messages'>
      <ul>
      {MessagesList.map((item, index)=>(
           <li  key={index+1} onClick={()=> ChangeData(item)} className={`msg-box  ${item.status === true ? "readed" : "" }`} >
                <div className="space">
                    <div className="d-flex">
                        <Avatar sx={{width:45,height:45}} src={item.picture} alt={item.name} />
                        <div className="d-block ml-2">
                            <div className="name">{item.name}</div>
                            <span>{item.subject}</span>
                        </div>
                    </div>
                    <div className="time">{item.time}</div>
                </div>
                <div className="text">
                    <p>{item.msg}</p>
                </div>
           </li>
        ))}
      </ul>
    </Container>
  )
})

const Container = styled.div`
   width:100%;
   height:85vh;
   max-height:85vh;
   overflow-y:auto; 
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

  ul{
     margin:0px;
     padding:0px;

 

       li{
          padding:15px;
          list-style:none;
          background:#CAE9FF;
          cursor:pointer;

          &:hover{
            background:#F4F4F6 !important;
          }

          .name{
              font-size:15px;
              font-weight:600;
          }

          span, .time{
              font-size:14px; 
          }

          span, .time{
            color:var(--blue) !important;
            font-weight:550;
         }

          p{
            font-size: 15px;
            color:var(--black);
            margin-top:10px;
          }
       }

       li.readed{
          background:#ffff;

          span, .time, p{
            color: #4F5D75 !important; 
         }
       }
  }


`;


export default MailerMessages
