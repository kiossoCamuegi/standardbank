import React from 'react'
import styled from 'styled-components';
import ImageLazyLoading from '../../Components/ImageLazyLoading';
import { Link } from 'react-router-dom';

function CarrerCards() {
  const Data = [
      {
        image:"https://victorvision.com.br/wp-content/uploads/2023/05/tipos-de-hardware-930x620.jpg",
        title:"Engenharia & IT",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ut molestiae nulla atque harum, animi, magni rem  amet!"
      },
      {
        image:"https://www.sqli.com/sites/default/files/2021-10/recruitment-digital-job.jpg",
        title:"Talennt aquicision",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ut molestiae nulla atque harum, animi, magni rem  amet!"
      },
      {
        image:"https://assets-blog.hostgator.com.br/wp-content/uploads/2022/03/12_MarketingAB_BLOG_BR.webp",
        title:"Recursos Humanos",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ut molestiae nulla atque harum, animi, magni rem  amet!"
      },
      {
        image:"https://www.itechfy.com/wp-content/uploads/2019/09/Good-Secretary.jpg",
        title:"Marketing",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ut molestiae nulla atque harum, animi, magni rem  amet!"
      },
  ];


  
    return (
     <Container>
         <div className="wrapper carrer-cards">
             <h1 className="title">Aréas de ingresso na Standard Bank</h1>
             <div className="cards">
                 {Data.map((item, index)=>(
                     <article key={index}>
                         <ImageLazyLoading  height={200} source={item.image} />
                         <div className="dets">
                            <Link to="#"><h2>{item.title}</h2></Link>
                            <p>{item.description}</p>
                         </div>
                     </article>
                 ))}
             </div>
         </div>
     </Container>
  )
}


const Container = styled.div`
    display:block;
    padding:10px 0px;


    .title{
        font-size: 35px;
        line-height: 45px;
        font-weight: bold;
        margin: 20px 0px;
    }


    .cards{
       display:flex;
       flex-wrap:wrap;
       width:100%;

       article{
          width:350px;
          height:300px;
          margin-right:20px;
          background:#fff;
          box-shadow:0px 3px 10px rgba(0,0,0,0.1);

            img{
                width:100%;
                height:150px; 
                object-fit:cover;
            }

            .dets{
                padding:10px;

                h2{
                     font-size:18px;
                     margin:5px 0px;
                     color:var(--black);
                }

                p{
                    font-size:15px;
                    color: #4F5D75!important;
                }
            }
       }

    }

`;

export default CarrerCards
