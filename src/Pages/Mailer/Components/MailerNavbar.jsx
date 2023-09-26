import React from 'react'
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import {BsSearch} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import {GrNotification} from "react-icons/gr";
import {LuSettings} from "react-icons/lu";
const Logo  = require("../../../Assets/images/logo1.png");
const Logo1  = require("../../../Assets/images/logo7.png");

function MailerNavbar() {
  return (
     <Container className='mailer-navbar bg-white' >
        <div className="nav-item logo">
            <Link to="/">  
                 <img src={ window.innerWidth <= 900 ? Logo1 : Logo} alt="StandardBank employees" />
            </Link>
        </div>
        <div className="nav-item search-form">
            <Form>
               <div className="icon"><BsSearch/></div>
               <Form.Control  placeholder='Pesquisar...' />
            </Form>
        </div>
        <div className="nav-item">
             <ul className="nav-icons">
                <li>
                    <GrNotification/>
                    <div className="count">7</div>
                </li>
                <li><LuSettings/></li>
             </ul>
            <Avatar sx={{width:40,height:40,bgcolor:`#F72585`}}>KC</Avatar>
        </div>
     </Container>
  )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
    width:100%;
    height:70px;
    position:fixed;
    top:0px;
    left:0px;
    box-shadow:0px 3px 10px rgba(0,0,0,0.1);  
    z-index:1000;


    .nav-item, form{
        display:flex;
        align-items:center;


         .nav-icons{
            list-style:none;
            margin:0px;
            padding:px;
            display:flex;
            align-items:center;

              li{
                list-style:none;
                margin:0px 15px;
                position:relative;
                cursor:pointer;

                  svg{
                    width:25px;
                    height:25px;
                  }

                  .count{
                      position:absolute;
                      padding:6px 4px;
                      border-radius:100%;
                      border:2px solid #fff;
                      box-shadow:0px 3px 10px rgba(0,0,0,0.1);
                      color:#ffff;
                      background:red;
                      font-size:12px;
                      width:30px;
                      height:25px;
                      top:-18px;
                      right:-16px;
                      font-weight:600;
                      display:flex;
                      align-items:center;
                      justify-content:center;
                  }
              }
         }
    }

    .search-form{
        width:45%; 
    }

    .logo img{
        max-height:50px;
    }

    form{
        width:100%;  
        background:#ffff;
        border-radius:10px;
        padding:0px 10px; 
        border:1px solid #dee2e6;

        input{ 
            border:none;
            box-shadow:unset !important;
        }

        svg{
            fill:var(--black);
            margin:0px 10px;
        }
    }
`;



export default MailerNavbar
