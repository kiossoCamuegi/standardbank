import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import {BiSolidUserCircle} from "react-icons/bi";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {AiOutlineCloseCircle} from "react-icons/ai";
const Logo =  require("../../Assets/images/logo1.png")

function Navbar() {
 const [ActiveMenu, setActiveMenu] = useState(false);

const Toogle = ()=>{
    setActiveMenu(ActiveMenu === true ? false :  true);
}

  return (
    <Container>
        <div className="wrapper">
             <div className="navbar-items">
                  <div className="nav-item">
                      <Link to="/"> <img src={Logo} className='logo' alt="standard bank" /></Link>
                  </div>
                  <ul className="nav-item links-menu">
                      <li><Link to="#">Sobre</Link></li>
                      <li><Link to="#">Serviços</Link></li>
                      <li><Link to="#">Campanhas</Link></li>
                      <li><Link to="#">Comunicações</Link></li>
                      <li><Link to="#">Produtos</Link></li>
                  </ul>
                  <div className="nav-item"> 
                      <div className="translator">
                          <div className="icon"></div> 
                      </div>
                      <Link to="/signin"><button className="btn btn-account bg-blue text-light"><BiSolidUserCircle /> Entrar</button></Link>  
                      <div onClick={Toogle} className="btn bg-blue text-light btn-toggle"><HiOutlineMenuAlt3 /></div>
                  </div>

                  <div className={`navbar-responsive ${ActiveMenu === true ? "" :  "d-none"}`} >
                    <div onClick={Toogle}  className="toogle-menu">
                          <AiOutlineCloseCircle/>
                    </div>
                    <br />
                    <ul>
                        <li><Link to="#">Sobre</Link></li>
                        <li><Link to="#">Serviços</Link></li>
                        <li><Link to="#">Campanhas</Link></li>
                        <li><Link to="#">Comunicações</Link></li>
                        <li><Link to="#">Produtos</Link></li>
                    </ul>
                    <Link to="/signin"><button className="btn bg-light text-blue"><BiSolidUserCircle /> Entrar</button></Link> 
                  </div>
             </div>
        </div>
    </Container>
  )
}

const Container = styled.nav`
    width:100%;
    border-bottom:1px solid #D8D5DB;

    .btn-toggle, .navbar-responsive{
          display:none;
    }

    .navbar-items{
        display:flex;
        align-items:center;
        justify-content:space-between;

          .nav-item{
               display:flex;
               align-items:center;
               padding:10px 0px; 
               margin:0px;


               img{
                  max-height:60px;
               }

               li{
                  margin:0px 15px;
                  list-style:none;

                    a{
                        color:var(--dark);
                        font-weight:600;
                    }
               }

               .btn{
                  padding:8px 22px;
                  margin:0px;

                    svg{ 
                        width:25px;
                        height:25px
                    }
               }
          }
    }


`;

export default Navbar