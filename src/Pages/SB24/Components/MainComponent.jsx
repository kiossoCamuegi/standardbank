import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import {AiFillEyeInvisible, AiFillPrinter,  AiFillEye , AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"
import { Swiper, SwiperSlide } from 'swiper/react'; 
import {BiLogoVisa} from "react-icons/bi";
import 'swiper/css';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FcSimCardChip} from "react-icons/fc";
import {AiFillCaretUp} from "react-icons/ai";
import Chart from "react-apexcharts";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const User = require("../../../Assets/images/avatars/user-3.jpg")
const Logo = require("../../../Assets/images/logo4.png")
const Images = [
    require("../../../Assets/images/avatars/user-3.jpg"),
    require("../../../Assets/images/avatars/user-4.jpg"),
    require("../../../Assets/images/avatars/user-5.jpg"),
    require("../../../Assets/images/avatars/user-6.jpg"),
    require("../../../Assets/images/avatars/user-7.jpg")
]

function MainComponent() {
  const [showMoney, setShowMoney] = useState(false);

  const Money = ()=>{
    setShowMoney(showMoney === false ? true : false);
  }

  const seriesData = [{
    x: new Date(1538778600000),
    y: [6629.81, 6650.5, 6623.04, 6633.33]
  },
  {
    x: new Date(1538780400000),
    y: [6632.01, 6643.59, 6620, 6630.11]
  },
  {
    x: new Date(1538782200000),
    y: [6630.71, 6648.95, 6623.34, 6635.65]
  },
  {
    x: new Date(1538784000000),
    y: [6635.65, 6651, 6629.67, 6638.24]
  },
  {
    x: new Date(1538785800000),
    y: [6638.24, 6640, 6620, 6624.47]
  },
  {
    x: new Date(1538787600000),
    y: [6624.53, 6636.03, 6621.68, 6624.31]
  },
  {
    x: new Date(1538789400000),
    y: [6624.61, 6632.2, 6617, 6626.02]
  },
  {
    x: new Date(1538791200000),
    y: [6627, 6627.62, 6584.22, 6603.02]
  },
  {
    x: new Date(1538793000000),
    y: [6605, 6608.03, 6598.95, 6604.01]
  },
  {
    x: new Date(1538794800000),
    y: [6604.5, 6614.4, 6602.26, 6608.02]
  },
  {
    x: new Date(1538796600000),
    y: [6608.02, 6610.68, 6601.99, 6608.91]
  },
  {
    x: new Date(1538798400000),
    y: [6608.91, 6618.99, 6608.01, 6612]
  },
  {
    x: new Date(1538800200000),
    y: [6612, 6615.13, 6605.09, 6612]
  },
  {
    x: new Date(1538802000000),
    y: [6612, 6624.12, 6608.43, 6622.95]
  },
  {
    x: new Date(1538803800000),
    y: [6623.91, 6623.91, 6615, 6615.67]
  },
  {
    x: new Date(1538805600000),
    y: [6618.69, 6618.74, 6610, 6610.4]
  },
  {
    x: new Date(1538807400000),
    y: [6611, 6622.78, 6610.4, 6614.9]
  },
  {
    x: new Date(1538809200000),
    y: [6614.9, 6626.2, 6613.33, 6623.45]
  },
  {
    x: new Date(1538811000000),
    y: [6623.48, 6627, 6618.38, 6620.35]
  },
  {
    x: new Date(1538812800000),
    y: [6619.43, 6620.35, 6610.05, 6615.53]
  },
  {
    x: new Date(1538814600000),
    y: [6615.53, 6617.93, 6610, 6615.19]
  },
  {
    x: new Date(1538816400000),
    y: [6615.19, 6621.6, 6608.2, 6620]
  },
  {
    x: new Date(1538818200000),
    y: [6619.54, 6625.17, 6614.15, 6620]
  },
  {
    x: new Date(1538820000000),
    y: [6620.33, 6634.15, 6617.24, 6624.61]
  },
  {
    x: new Date(1538821800000),
    y: [6625.95, 6626, 6611.66, 6617.58]
  },
  {
    x: new Date(1538823600000),
    y: [6619, 6625.97, 6595.27, 6598.86]
  },
  {
    x: new Date(1538825400000),
    y: [6598.86, 6598.88, 6570, 6587.16]
  },
  {
    x: new Date(1538827200000),
    y: [6588.86, 6600, 6580, 6593.4]
  },
  {
    x: new Date(1538829000000),
    y: [6593.99, 6598.89, 6585, 6587.81]
  },
  {
    x: new Date(1538830800000),
    y: [6587.81, 6592.73, 6567.14, 6578]
  },
  {
    x: new Date(1538832600000),
    y: [6578.35, 6581.72, 6567.39, 6579]
  },
  {
    x: new Date(1538834400000),
    y: [6579.38, 6580.92, 6566.77, 6575.96]
  },
  {
    x: new Date(1538836200000),
    y: [6575.96, 6589, 6571.77, 6588.92]
  },
  {
    x: new Date(1538838000000),
    y: [6588.92, 6594, 6577.55, 6589.22]
  },
  {
    x: new Date(1538839800000),
    y: [6589.3, 6598.89, 6589.1, 6596.08]
  },
  {
    x: new Date(1538841600000),
    y: [6597.5, 6600, 6588.39, 6596.25]
  },
  {
    x: new Date(1538843400000),
    y: [6598.03, 6600, 6588.73, 6595.97]
  },
  {
    x: new Date(1538845200000),
    y: [6595.97, 6602.01, 6588.17, 6602]
  },
  {
    x: new Date(1538847000000),
    y: [6602, 6607, 6596.51, 6599.95]
  },
  {
    x: new Date(1538848800000),
    y: [6600.63, 6601.21, 6590.39, 6591.02]
  },
  {
    x: new Date(1538850600000),
    y: [6591.02, 6603.08, 6591, 6591]
  },
  {
    x: new Date(1538852400000),
    y: [6591, 6601.32, 6585, 6592]
  },
  {
    x: new Date(1538854200000),
    y: [6593.13, 6596.01, 6590, 6593.34]
  },
  {
    x: new Date(1538856000000),
    y: [6593.34, 6604.76, 6582.63, 6593.86]
  },
  {
    x: new Date(1538857800000),
    y: [6593.86, 6604.28, 6586.57, 6600.01]
  },
  {
    x: new Date(1538859600000),
    y: [6601.81, 6603.21, 6592.78, 6596.25]
  },
  {
    x: new Date(1538861400000),
    y: [6596.25, 6604.2, 6590, 6602.99]
  },
  {
    x: new Date(1538863200000),
    y: [6602.99, 6606, 6584.99, 6587.81]
  },
  {
    x: new Date(1538865000000),
    y: [6587.81, 6595, 6583.27, 6591.96]
  },
  {
    x: new Date(1538866800000),
    y: [6591.97, 6596.07, 6585, 6588.39]
  },
  {
    x: new Date(1538868600000),
    y: [6587.6, 6598.21, 6587.6, 6594.27]
  },
  {
    x: new Date(1538870400000),
    y: [6596.44, 6601, 6590, 6596.55]
  },
  {
    x: new Date(1538872200000),
    y: [6598.91, 6605, 6596.61, 6600.02]
  },
  {
    x: new Date(1538874000000),
    y: [6600.55, 6605, 6589.14, 6593.01]
  },
  {
    x: new Date(1538875800000),
    y: [6593.15, 6605, 6592, 6603.06]
  },
  {
    x: new Date(1538877600000),
    y: [6603.07, 6604.5, 6599.09, 6603.89]
  },
  {
    x: new Date(1538879400000),
    y: [6604.44, 6604.44, 6600, 6603.5]
  },
  {
    x: new Date(1538881200000),
    y: [6603.5, 6603.99, 6597.5, 6603.86]
  },
  {
    x: new Date(1538883000000),
    y: [6603.85, 6605, 6600, 6604.07]
  },
  {
    x: new Date(1538884800000),
    y: [6604.98, 6606, 6604.07, 6606]
  },
 ]; 
  const seriesDataLinear =  [];
      
  var ChartOptions = {
          
    series: [{
      data: seriesData
    }],
    options: {
      chart: {
        type: 'candlestick',
        height: 290,
        id: 'candles',
        toolbar: {
          autoSelected: 'pan',
          show: false
        },
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#64DFDF',
            downward: '#EF233C'
          }
        }
      },
      xaxis: {
        type: 'datetime'
      }
    },
  
    seriesBar: [{
      name: 'volume',
      data: seriesDataLinear
    }],
    optionsBar: {
      chart: {
        height: 160,
        type: 'bar',
        brush: {
          enabled: true,
          target: 'candles'
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date('20 Jan 2017').getTime(),
            max: new Date('10 Dec 2017').getTime()
          },
          fill: {
            color: '#ccc',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
          colors: {
            ranges: [{
              from: -1000,
              to: 0,
              color: '#F15B46'
            }, {
              from: 1,
              to: 10000,
              color: '#FEB019'
            }],
      
          },
        }
      },
      stroke: {
        width: 0
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          offsetX: 13
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    },
  
  
  }; 

  const CheckMenu = ()=>{
      if(window.innerWidth <= 900){
          let SidebarMenu  = document.querySelector(".sidebar-container");
          SidebarMenu.classList.add("hide-sidebar");
      }
  }


  const ToggleSidebar = ()=>{
    let SidebarMenu  = document.querySelector(".sidebar-container");
    SidebarMenu.classList.remove("hide-sidebar");   
  }


  useEffect(()=>{
     CheckMenu();
  },[]);

 
    return (
        <Container>
            <div className="cover">
                <div className="wrapper">
                    <div className="cover-content">
                        <div className="space-area">
                        <div className="toggle-sidebar" onClick={ToggleSidebar} ><HiOutlineMenuAlt3 />  </div>
                        <div className=' main-block'>
                        <div className="d-flex user">
                           <Avatar src={User} sx={{width:150,height:150}}  />
                           <div className="d-block">
                               <h3>Paulo Antonio Mauro</h3>
                                  <h5> 
                                    {window.innerWidth <= 900 ?  "" : "Saldo : "}
                                   <div className="view"> 
                                      <div className="showhide" onClick={Money}>{showMoney === true ? <AiFillEye/>  : <AiFillEyeInvisible /> }</div>
                                       <input type={showMoney === true ? "text" : "password"}readOnly  value="289.093.883,09 KZ"   /> 
                                      </div>
                                   </h5>
                                </div>
                           </div>
                           <div className=" credit-cards">
                           <Swiper   spaceBetween={window.innerWidth <= 900 ?  10 : 30}  slidesPerView={window.innerWidth <= 900 ?  1 : 2} onSlideChange={() => console.log('slide change')}  onSwiper={(swiper) => console.log(swiper)}  >
                            <SwiperSlide>
                              <article className='cd' >
                                    <div className="cd-content b1">
                                          <div className="cd-header"> 
                                               <div className="logo"><img src={Logo} alt="Standard Bank" /></div>
                                          </div> 
                                          <div className="d-flex">
                                            <div className="icon"><FcSimCardChip /> </div>
                                            <div className="code">4565 8474 0384 0944</div>
                                          </div> 
                                          <div className="cd-header">
                                                <div className="block-center"> 
                                                    <span>EXPIRES 10-11-2040</span>
                                                </div>
                                              <div className="visa"><BiLogoVisa/></div>
                                          </div>
                                    </div>
                                </article>
                            </SwiperSlide>   
                            <SwiperSlide>
                              <article className='cd' >
                                 <div className="cd-content b2">
                                          <div className="cd-header"> 
                                               <div className="logo"><img src={Logo} alt="Standard Bank" /></div>
                                          </div> 
                                          <div className="d-flex">
                                            <div className="icon"><FcSimCardChip /> </div>
                                            <div className="code">3784 8474 9084 8933</div>
                                          </div> 
                                          <div className="cd-header">
                                                <div className="block-center"> 
                                                    <span>EXPIRES 18-12-2050</span>
                                                </div>
                                              <div className="visa"><BiLogoVisa/></div>
                                          </div>
                                    </div>
                                </article>
                            </SwiperSlide>  
                            <SwiperSlide>
                              <article className='cd' >
                              <div className="cd-content b3">
                                          <div className="cd-header"> 
                                               <div className="logo"><img src={Logo} alt="Standard Bank" /></div>
                                          </div> 
                                          <div className="d-flex">
                                            <div className="icon"><FcSimCardChip /> </div>
                                            <div className="code">4894 2153 3234 7843</div>
                                          </div> 
                                          <div className="cd-header">
                                                <div className="block-center"> 
                                                    <span>EXPIRES 23-09-2024</span>
                                                </div>
                                              <div className="visa"><BiLogoVisa/></div>
                                          </div>
                                    </div>
                                </article>
                            </SwiperSlide>   
                          </Swiper>  
                           </div>
                        </div>

                           <div className="cards"> 
                               <div className="cardb">
                               <div className="block">
                                  <span>Entradas</span>
                                    <h2 className="d-flex">489.095
                                      <small className="text-success">
                                        <div className="caret"><AiFillCaretUp /> </div>
                                        32%
                                      </small> 
                                  </h2>
                                  <div className="line success"></div>
                                </div>
                               </div>
                               <div className="cardb">
                               <div className="block">
                                  <span>Saidas</span>
                                    <h2 className="d-flex">746.585 
                                      <small className="text-danger">
                                        <div className="caret"><AiOutlineCaretDown /> </div>
                                        57%
                                      </small> 
                                  </h2>
                                  <div className="line danger"></div>
                                </div>
                               </div>
                               <div className="cardb">
                               <div className="block">
                                  <span>Creditos</span>
                                    <h2 className="d-flex">126.08 
                                      <small className="text-success">
                                        <div className="caret"><AiFillCaretUp /> </div>
                                        12%
                                      </small> 
                                  </h2>
                                  <div className="line success"></div>
                                </div>
                               </div>
                               <div className="cardb">
                               <div className="block">
                                  <span>Saldo</span>
                                    <h2 className="d-flex">914.00 
                                      <small className="text-danger">
                                        <div className="caret"><AiOutlineCaretDown /> </div>
                                        6%
                                      </small> 
                                  </h2>
                                  <div className="line danger"></div>
                                </div>
                               </div>
                           </div>


                        </div> 
                       </div>
                    </div>
             </div> 
             <div className="wrapper">
            <div className="table-container">
           <h1>Movimentos</h1>
            <Table striped  hover>
                <thead>
                    <tr> 
                        <th>Movimento</th>
                        <th>Conta</th>
                        <th>Usúario (Cliente)</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td><div className="text-danger d-flex">Transferencia 500.000 Kz<div className="ml-2"><AiOutlineCaretDown /></div> </div> </td>
                        <td className='text-blue'>A006 9590 58958 4895 9595 9</td>
                        <td><div className="d-flex"><Avatar sx={{width:40,height:40}} src={Images[2]} /><div className="ml-2"> Mateus Francisco Lopes</div></div></td>
                        <td>10-08-2023 10:48</td>
                        <td><button className="btn bg-blue text-light"><AiFillPrinter /></button></td>
                    </tr> 
                    <tr> 
                        <td><div className="text-success d-flex">Recebeu uma Transferencia de 10.000 Kz<div className="ml-2"><AiOutlineCaretUp /></div> </div> </td>
                        <td className='text-blue'>A006 9050 47673 4747 3</td>
                        <td><div className="d-flex"><Avatar sx={{width:40,height:40}} src={Images[3]} /><div className="ml-2"> Kyle Portuga Gomez</div></div></td>
                        <td>10-08-2023 10:48</td>
                        <td><button className="btn bg-blue text-light"><AiFillPrinter /></button></td>
                    </tr> 
                    <tr> 
                        <td><div className="text-danger d-flex">Transferencia 370.470 Kz<div className="ml-2"><AiOutlineCaretDown /></div> </div> </td>
                        <td className='text-blue'>A006 6795 6578 4895 7890 3</td>
                        <td><div className="d-flex"><Avatar sx={{width:40,height:40}} src={Images[4]} /><div className="ml-2"> Santiago martins</div></div></td>
                        <td>10-08-2023 10:48</td>
                        <td><button className="btn bg-blue text-light"><AiFillPrinter /></button></td>
                    </tr> 
                </tbody>
                </Table>
            </div>
           <div className="mt-4">
           <div className="table-container mt-4">
           <h1>Stock Standard Bank</h1>
               <div id="chart-candlestick">
                    <Chart options={ChartOptions.options} series={ChartOptions.series} type="candlestick" height={290} />
                </div> 
            </div>
           </div>
            <br />
             </div>
        </Container>
      )
    }
     
    
const Container = styled.div`
    width:100%;
    height:100vh;
    max-height:100vh;
    overflow-y:auto;
    background:#ffff;    

    .toggle-sidebar{
        display:none;
    }


    .table-container{
        margin-top:-80px;
        background:#ffff; 
        box-shadow:0px 3px 10px rgba(0, 0, 0, 0.2);
        border-radius:6px;
        padding:20px;

        h1{
            font-size:23px;
            margin:0px;
            display:flex;
            align-items:flex-end;
            font-weight:bold;
            margin-bottom:15px;
        }
    }


    .line{
        width: 500px; 
        height: 50px;  
        border: solid 5px #000;
        border-radius: 50%/100px 100px 0 0; 
        margin-top:40px;
    }

    .line.success{
        border-color:#64DFDF transparent transparent transparent;
    }

    .line.danger{
        border-color:red transparent transparent transparent;
    }


    .main-block{ 
         max-width:950px;
         padding-right:10px;
    }

    .credit-cards{
        max-width:760px;  
        margin-top:20px;

        .cd{   

           .cd-content{
                height:200px;
                background:#ffff; 
                box-shadow:0px 3px 10px rgba(0, 0, 0, 0.9);
                border-radius:10px;
                padding:15px;

                  .cd-header{
                    display:flex;
                    justify-content:space-between;
                    width:100%; 
                    color:#fff;
                    font-size:18px;
                    align-items:center;
                
                      .visa{
                          svg{
                              width:100px;
                              height:60px;
                          }
                      }

                      .logo img{
                          max-width:180px;
                      }

                  }

                  .icon{ 
                    margin-top:10px;
                    svg{
                      width:60px;
                      height:60px;
                    }
                 }

                 .code{
                     font-size:18px;
                     color:#fff;
                     letter-spacing:1px;
                     margin-left:10px;
                 }




           }
        }
    }


    .b1{
        background-image: linear-gradient(45deg, rgba(40, 99, 151,0.2) 0%, rgba(40, 99, 151,0.2) 16.667%,rgba(20, 84, 131,0.2) 16.667%, rgba(20, 84, 131,0.2) 33.334%,rgba(30, 92, 141,0.2) 33.334%, rgba(30, 92, 141,0.2) 50.001%,rgba(59, 114, 172,0.2) 50.001%, rgba(59, 114, 172,0.2) 66.668%,rgba(69, 122, 182,0.2) 66.668%, rgba(69, 122, 182,0.2) 83.335%,rgba(49, 107, 162,0.2) 83.335%, rgba(49, 107, 162,0.2) 100.002%),linear-gradient(0deg, rgba(40, 99, 151,0.2) 0%, rgba(40, 99, 151,0.2) 16.667%,rgba(20, 84, 131,0.2) 16.667%, rgba(20, 84, 131,0.2) 33.334%,rgba(30, 92, 141,0.2) 33.334%, rgba(30, 92, 141,0.2) 50.001%,rgba(59, 114, 172,0.2) 50.001%, rgba(59, 114, 172,0.2) 66.668%,rgba(69, 122, 182,0.2) 66.668%, rgba(69, 122, 182,0.2) 83.335%,rgba(49, 107, 162,0.2) 83.335%, rgba(49, 107, 162,0.2) 100.002%),linear-gradient(90deg, rgba(40, 99, 151,0.2) 0%, rgba(40, 99, 151,0.2) 16.667%,rgba(20, 84, 131,0.2) 16.667%, rgba(20, 84, 131,0.2) 33.334%,rgba(30, 92, 141,0.2) 33.334%, rgba(30, 92, 141,0.2) 50.001%,rgba(59, 114, 172,0.2) 50.001%, rgba(59, 114, 172,0.2) 66.668%,rgba(69, 122, 182,0.2) 66.668%, rgba(69, 122, 182,0.2) 83.335%,rgba(49, 107, 162,0.2) 83.335%, rgba(49, 107, 162,0.2) 100.002%),linear-gradient(90deg, rgb(36, 17, 207),rgb(135, 249, 243)) !important;
    }

    .b2{
        background-image: radial-gradient(circle at 49% 80%, rgba(105, 105, 105,0.06) 0%, rgba(105, 105, 105,0.06) 25%,rgba(119, 119, 119,0.06) 
        25%, rgba(119, 119, 119,0.06) 50%,rgba(134, 134, 134,0.06) 50%, rgba(134, 134, 134,0.06) 75%,rgba(148, 148, 148,0.06) 75%,
         rgba(148, 148, 148,0.06) 100%),radial-gradient(circle at 58% 97%, rgba(130, 130, 130,0.06) 0%, rgba(130, 130, 130,0.06) 25%,
         rgba(97, 97, 97,0.06) 25%, rgba(97, 97, 97,0.06) 50%,rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 75%,rgba(30, 30, 30,0.06) 75%, 
         rgba(30, 30, 30,0.06) 100%),radial-gradient(circle at 77% 62%, rgba(106, 106, 106,0.06) 0%, rgba(106, 106, 106,0.06) 25%,rgba(71, 71, 71,0.06) 25%,
          rgba(71, 71, 71,0.06) 50%,rgba(37, 37, 37,0.06) 50%, rgba(37, 37, 37,0.06) 75%,rgba(2, 2, 2,0.06) 75%, rgba(2, 2, 2,0.06) 100%),
          radial-gradient(circle at 53% 15%, rgba(182, 182, 182,0.06) 0%, rgba(182, 182, 182,0.06) 25%,rgba(149, 149, 149,0.06) 25%, 
          rgba(149, 149, 149,0.06) 50%,rgba(115, 115, 115,0.06) 50%, rgba(115, 115, 115,0.06) 75%,rgba(82, 82, 82,0.06) 75%, 
          rgba(82, 82, 82,0.06) 100%),radial-gradient(circle at 65% 73%, rgba(230, 230, 230,0.06) 0%, rgba(230, 230, 230,0.06) 25%,
          rgba(222, 222, 222,0.06) 25%, rgba(222, 222, 222,0.06) 50%,rgba(214, 214, 214,0.06) 50%, rgba(214, 214, 214,0.06) 75%,
        rgba(206, 206, 206,0.06) 75%, rgba(206, 206, 206,0.06) 100%),linear-gradient(135deg, rgb(131, 27, 242),rgb(248, 30, 172)) !important;
    }

    .b3{
        background-image: radial-gradient(circle at 11% 62%, rgba(205, 205, 205,0.04) 0%, rgba(205, 205, 205,0.04) 50%,rgba(149, 149, 149,0.04) 50%,
         rgba(149, 149, 149,0.04) 100%),radial-gradient(circle at 78% 10%, rgba(49, 49, 49,0.04) 0%, rgba(49, 49, 49,0.04) 50%,rgba(254, 254, 254,0.04) 50%, 
         rgba(254, 254, 254,0.04) 100%),radial-gradient(circle at 92% 43%, rgba(34, 34, 34,0.04) 0%, rgba(34, 34, 34,0.04) 50%,
        rgba(206, 206, 206,0.04) 50%, rgba(206, 206, 206,0.04) 100%),linear-gradient(329deg, rgb(241, 77, 33),rgb(218, 227, 61)) !important;
    }

    .b4{
        background-image: radial-gradient(circle at 88% 18%, rgba(136, 136, 136,0.05) 0%, rgba(136, 136, 136,0.05) 50%,
        rgba(172, 172, 172,0.05) 50%, rgba(172, 172, 172,0.05) 100%),radial-gradient(circle at 34% 9%, rgba(149, 149, 149,0.05) 0%, rgba(149, 149, 149,0.05) 50%,
        rgba(55, 55, 55,0.05) 50%, rgba(55, 55, 55,0.05) 100%),radial-gradient(circle at 37% 56%, rgba(97, 97, 97,0.05) 0%,
         rgba(97, 97, 97,0.05) 50%,rgba(160, 160, 160,0.05) 50%, rgba(160, 160, 160,0.05) 100%),linear-gradient(69deg, rgb(10, 68, 151),rgb(72, 211, 165)) !important;
    }

       .cover{
           height:500px;
           width:100%;
           padding:20px 5px;
           background-image: radial-gradient(circle at 52% 33%, rgba(17, 17, 17,0.08) 0%, rgba(17, 17, 17,0.08) 
           33.333%,rgba(74, 74, 74,0.08) 33.333%, rgba(74, 74, 74,0.08) 66.666%,rgba(130, 130, 130,0.08) 66.666%, 
           rgba(130, 130, 130,0.08) 99.999%),radial-gradient(circle at 70% 65%, rgba(129, 129, 129,0.08) 0%,
           rgba(129, 129, 129,0.08) 33.333%,rgba(95, 95, 95,0.08) 33.333%, rgba(95, 95, 95,0.08) 66.666%,rgba(60, 60, 60,0.08) 66.666%,
           rgba(60, 60, 60,0.08) 99.999%),radial-gradient(circle at 97% 89%, rgba(21, 21, 21,0.08) 0%, rgba(21, 21, 21,0.08) 33.333%,
           rgba(89, 89, 89,0.08) 33.333%, rgba(89, 89, 89,0.08) 66.666%,rgba(156, 156, 156,0.08) 66.666%, rgba(156, 156, 156,0.08) 99.999%),
           linear-gradient(0deg, rgb(17, 9, 206),rgb(7,42,200));
     
           .space-area{
               display:flex;
               justify-content:space-between;
               align-items:flex-start;
               width:100%;
               
                .cards{ 
                    display:flex;
                    flex-wrap:wrap; 
                    max-width:580px; 
                    justify-content:space-between;
                    padding-left:10px; 
                    padding-top:28px;

                    .cardb{
                        width:215px; 
                        height:155px; 
                        background:#ffff;
                        margin:10px 0px;
                        box-shadow:0px 3px 10px rgba(0, 0, 0, 0.2);
                        border-radius:6px;
                        padding:10px;
                        overflow:hidden;


                        .block{  
                            color:var(--black) !important;

                            .d-flex{
                                color:var(--black) !important;
                            }

                            span{
                              color:#4F5D75 !important;
                              font-size:20px;
                            }
    
                             h2{
                                 font-size:30px;
                                 margin:0px;
                                 display:flex;
                                 align-items:flex-end;
                                 font-weight:bold;
                                 margin-top:4px;
                                  
                                   small{
                                       font-size:18px;
                                       display:flex;
                                       margin-left:5px; 
    
                                       svg{
                                          margin:0px 5px;
                                       }
                                   }

                                   small.text-success{
                                     color:#64DFDF !important;
                                   }
                             }
                         }





                    }
                }


           }

            .d-flex{ 
                align-items:center;
                color:#fdfdfd;

               .d-block{
                  padding-left:20px;
                  input{ 
                    background:transparent !important;
                    border:none;
                    width:auto;   
                    color:#ffff;
                    letter-spacing:1px;
                    outline:none !important;
                  }

                  h3{
                    font-size:30px;
                    margin-bottom:10px;
                  }

                  h5, .view{
                    display:flex;
                    align-items:center;
                    font-size:22px;

                      .showhide{
                         margin:0px 10px;
                         cursor:pointer;
                      }
                  }
               }
            }


       }

`;


export default MainComponent