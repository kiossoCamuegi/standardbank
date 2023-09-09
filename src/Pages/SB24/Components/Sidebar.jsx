import React, { useState } from 'react'
import { styled } from 'styled-components'
import {AiOutlineSetting, AiOutlineLogout, AiOutlineDashboard, AiOutlineCreditCard, AiOutlineArrowRight} from "react-icons/ai"
import {BsCreditCard2Back, BsArrowRight,  BsCashCoin} from "react-icons/bs"
import {TbReportAnalytics} from "react-icons/tb";
import {MdOutlineCreditCardOff, MdOutlineDashboardCustomize} from "react-icons/md"
import {BiMoneyWithdraw, BiSolidUserCircle} from "react-icons/bi";
import { Link } from 'react-router-dom';
const Logo = require("../../../Assets/images/sb24x.jpg")

function Sidebar() {
    const [ActiveMenu, setActiveMenu] = useState(false);

    const Links = [
        {source:"#", icon:<AiOutlineDashboard /> , text:"Resumo"}, 
        {source:"#", icon:<BsCreditCard2Back /> , text:"Transferencias"}, 
        {source:"#", icon:<AiOutlineCreditCard /> , text:"Pagamentos"}, 
        {source:"#", icon:<BsCashCoin /> , text:"Levantamos"},  
        {source:"#", icon:<TbReportAnalytics /> , text:"Extratos"}, 
        {source:"#", icon:<MdOutlineCreditCardOff /> , text:"Creditos"}, 
        {source:"#", icon:<MdOutlineDashboardCustomize /> , text:"Personalizar"}, 
        {source:"#", icon:<BiMoneyWithdraw /> , text:"Enviar dinheiro"}, 
        {source:"#", icon:<BiSolidUserCircle /> , text:"Particular"}, 
        {source:"#", icon:<AiOutlineSetting /> , text:"Definições"}, 
    ];

    const ToggleSidebar = ()=>{
        let SidebarMenu  = document.querySelector(".sidebar-container");
        SidebarMenu.classList.add("hide-sidebar");   
      }

  return (
    <Container className='sidebar-container'> 
        <div className="space">
        <ul className='sidebar' >
       <div className="space-header">
       <div className="logo">
              <Link to="#"><img src={Logo} alt="" /> </Link>
        </div>
        <div className="toggle-sidebar" onClick={ToggleSidebar}><BsArrowRight/> </div>
       </div>
          {Links.map((item, index)=>{
             return(<Link to="#">
                <li className={index === 0 ? "active" : ""} >
                    <div className="flex">
                        <div className="icon">{item.icon}</div> 
                        <span>{item.text}</span> 
                    </div>
                    <div className="arr">
                        <AiOutlineArrowRight/>
                    </div>
                </li>
                </Link>)
          })}
        </ul>
        <ul className='sidebar' >
          <div className="mt-2">
          <Link to="/">
               <li className="bg-red">
                   <div className="flex">
                       <div className="icon"><AiOutlineLogout/> </div>
                       <span>Terminar sessão</span>
                   </div>
               </li>
            </Link>
          </div>
        </ul>
        </div>
    </Container>
  )
}


const Container = styled.div`
    min-width:300px;
    height:100vh;
    background:var(--black);  
    box-shadow:0px 3px 10px rgba(0, 0, 0, 0.2);
    padding:20px;


     .logo{
        img{
            max-width:250px;
            margin-bottom:20px;
        }
     }

     .space{
        display:flex; 
        justify-content:space-between; 
        flex-direction:column;
        height:100%; 
     }


     ul{
         margin:0px 0px;
         padding:5px 10px;

         li{
             padding:10px;
             margin:10px 0px;
             display:flex;
             align-items:center;
             justify-content:space-between; 
             border-radius:6px;
             transition:all 1s ease-in-out;
             font-size:18px;
             color:#ffff;

             .flex{
                display:flex;
                align-items:center;
             }

               .icon{
                  width:30px;
                  height:30px;
                  border-radius:100%;
                  margin-right:10px;
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  font-size:20px;
               }

               &:hover{
                 background:#ffff;
                 color:var(--blue);
               }
         }

         li.active{
             background:var(--blue);
             color:#fff;

             .icon{
                color:var(--blue);
                background:#ffff;
             }
         }

     }
`;

export default Sidebar