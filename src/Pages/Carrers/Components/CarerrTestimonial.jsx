import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

function CarerrTestimonial() {
  return (
     <Container>
        <div className="wrapper">
             <div className="content carrer-testimonial">
                  <div className="image">
                     <Avatar sx={{width:250,height:250}}  src="https://media.licdn.com/dms/image/D4D03AQFIYhBCmdVX7g/profile-displayphoto-shrink_800_800/0/1683419760633?e=1700092800&v=beta&t=5qSJROYV1stn4WJEPsDwQGvwq_pgz5pCzKNS4xRfKU8" />
                  </div>
                  <div className="details">
                    <div className="block">
                        <h1>Kiosso Camuegi</h1>
                        <span className='text-blue' >Desenvolvedor de softwares</span>
                    </div>
                    <p>Kiosso é desenvolvedor da equipe standard programmers, parte da organização Tech. ele tem formação em desenvolvimento de softwares e de Computação e adora usar sua experiência em Machine Learning (ML) para se aprofundar nos dados dos clientes e coletar insights e recomendações para as partes interessadas de seus negócios. ele ingressou na Amazon em abril de 2017, logo após concluir seu pós-doutorado em Informática Biomédica pele Universidade de Columbia.</p>
                    <p>Kiosso é responsável por construir modelos de aprendizado de máquina (ML) que ajudam as partes interessadas de seus negócios a criar produtos e mensagens personalizadas para seus clientes. ele ajudou a lançar e personalizar diversos programas e produtos, como ofertas de planos de assinatura Prime e campanhas de volta às aulas/fora da faculdade. Recentemente, ele ajudou a desenvolver uma solução para dimensionar modelos de ML globalmente e lançar a personalização mais rapidamente em novos mercados. A parte favorita de Kiosso em trabalhar na Amazon é a capacidade de usar dados para fazer recomendações que atendam aos clientes. A cultura obcecada pelo cliente da Amazon tornou este trabalho ideal para ele.</p>
                    <p>Uma das coisas que Kiosso adora na Amazon é a oportunidade de crescer e aprender novas habilidades enquanto trabalha com algumas das pessoas mais inteligentes do setor. Durante sua gestão, ele aprendeu diversas linguagens de programação, aprendeu e aplicou novos métodos científicos, foi coautora de diversas publicações internas e uma publicação externa, e foi coautora de uma patente. Essa experiência proporcionou a ele o melhor dos dois mundos: trabalho acelerado na indústria, além de aprendizado e crescimento acadêmico.</p>
                    <p>  Fora do trabalho, Kiosso adora viajar, caminhar, explorar as montanhas e lagos ao redor de Seattle e experimentar novos cafés e restaurantes na região. ele também gosta de cozinhar, ler, desenhar e fazer jardinagem interna em dias mais sombrios.</p>
                    <a href="https://kiossocamuegi.pages.dev/" target='_blank'><button className="btn bg-blue mt-4 text-light">Ver portofolio</button></a>
                </div>
             </div>
        </div>
     </Container>
  )
}



const Container = styled.div`
    padding:40px 0px;
    width:100%; 
    margin-top:20px;
    background:#F8F9FA;

      .content{
           display:flex;
           justify-content:center;
           width:100%;
           margin:0 auto; 

             .details{
                  padding-left:40px;
                  max-width:800px;

                  .block{
                     margin-bottom:20px;     
                  }

                  h1{
                       font-size:30px;
                       font-weight:600;
                  }

                  p{
                    font-size: 16px;
                    color: #4F5D75!important;
                  }
             }
      }

`;




export default CarerrTestimonial
