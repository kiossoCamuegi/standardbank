import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import {BsInbox, BsStar, BsTrash, BsClock,BsSend,BsCardImage,BsQuestionCircle, BsPlusCircle} from "react-icons/bs";
import { Link } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ImageLazyLoading from '../../Components/ImageLazyLoading';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

const MailerMenu   = forwardRef((props, ref) =>  {

    const Images =  [ 
        "https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_limit,fl_progressive,q_80,w_700/rypcyzjvg64r279qkvbn.jpg",
        "https://image-prod.iol.co.za/16x9/800/Climate-activisis-clashed-with-security-personnel-at-Standard-Bank-Picture-Ayanda-Ndamane-African-News-Agency-ANA?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/1a82ca95-b5ea-5b48-9342-52e25be90074",
        "https://media.licdn.com/dms/image/D4D22AQEeVdAqjkcTmQ/feedshare-shrink_800/0/1693905436370?e=1698278400&v=beta&t=p6oDUKKzoCPmYnI7f4kBhErt2KA9f1fY8dZV-HHcf14",
        "https://media.licdn.com/dms/image/D4D22AQFjdNIxMyowWg/feedshare-shrink_800/0/1693576149283?e=1697068800&v=beta&t=Yr2rw5dRPkMb8J-HdjjPFc9Jo37HTGwtzlrG0v6-rbA",
        "https://www.standardbank.co.za/file_source/SBG/Assets/Img/SA/Newsroom/RugbyFest_600x300_Landscape.jpg",
        "https://pbs.twimg.com/media/FOIPxFYXMAYVV85.jpg",
    ]

  const MenuItems = [
      {icon:<BsInbox/>, title:"Correio eletronico", link:""},
      {icon:<BsStar/>, title:"Favoritos", link:""},
      {icon:<BsTrash/>, title:"Lixeira", link:""},
      {icon:<BsClock/>, title:"Eventos", link:""},
      {icon:<BsSend/>, title:"Mensagens enviadas", link:""},
      {icon:<BsCardImage/>, title:"Ficheiros anexados", link:""},
      {icon:<BsQuestionCircle/>, title:"Suporte tecnico", link:""},
  ]; 


  const ChangeData =  ()=>{ 
   props.ShowChat(true);
 }

 const [Toggle, setToggle] = useState(false);


  return (
    <>
       <Container className={Toggle  === true  ? 'mailer-menu show'  : "mailer-menu" }>
         <div className="ct">
            <button  onClick={()=> ChangeData()} className="text-blue btn text-center"><BsPlusCircle/><span className="ml-2">Compor mensagem</span></button>
         </div>
         <ul>
           {MenuItems.map((item, index)=>(
              <li className={`${index+1 ===  1 ? "active" : ""}`} ><Link to="#">{item.icon} <span className="ml-2">{item.title}</span></Link></li>
           ))}
         </ul>
        <div className="ct">
        <h3>Ultimos anexos</h3>
        </div>
         <div className="assets">
            {Images.map((item, index)=>(
                <ImageLazyLoading height="80" source={item} />
            ))}
         </div>  
        </Container> 
      <div className="mailer-toogle-menu toggle bg-blue" onClick={()=>setToggle(Toggle  === true  ? false : true)} > 
       {Toggle  === true  ? <AiOutlineClose/>  : <AiOutlineMenu/> }</div>
    </>
  )
})


const Container = styled.div`
   min-width:300px;
   width:300px;
   height:100vh;
   padding-top:80px;
   background:#ffff; 

     .ct{
        padding:20px;

        button{
            border:1px solid var(--blue);
            border-radius:6px !important; 
            width:100%;
        }

        h3{
            font-size:18px;
            margin:5px 0px;
            font-weight:600;
        }
     }

     ul{
        margin:0px;
        padding:0px;

        li{
           margin:5px 0px;
           padding:5px 30px;
           font-size:16px; 
           list-style:none;
          
             a{
                color:var(--black);
             }
        }

        li.active{
           background:#CAE9FF;
           color:var(--blue);
           border-left:3px solid var(--blue);
        }
     }

     .assets{
          display:flex;
          flex-wrap:wrap; 
          padding:0px 10px;

          img{
              width:45%;
              height:80px;
              margin:5px; 
              object-fit:cover;
              border:3px solid #fff;
              border-radius:10px;
              box-shadow:0px 3px 10px rgba(0,0,0,0.1);
          }
     }
`;

export default MailerMenu
