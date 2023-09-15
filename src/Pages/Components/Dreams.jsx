import React from 'react'
import { styled } from 'styled-components';

function Dreams() {
  return (
     <Container>
        <div className="wrapper dreams">
           <div className="text-area">
            <h1>É possivel sonhar muito mais alto com a standard Bank</h1>
            <p>A nossa presença em Angola, há mais de uma década, tem sido pautada por um 
              forte investimento no desenvolvimento e capacitação dos nossos colaboradores. Pretendemos ser a melhor empresa para trabalhar em Angola e estamos continuamente a melhorar a experiência do colaborador para garantir que atraímos os melhores talentos, os desenvolvemos, mas também que conseguimos retê-los numa era em que o propósito empresarial e o fazer o negócio pelo Bem é 
            cada vez mais importante e valorizado pelas novas gerações.</p>
          </div> 
              <iframe  src="https://www.youtube.com/embed/DZlYYFGhJcY" title="&quot;ESTALAR&quot; SB24, Standard Bank Angola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
     </Container>
  )
}

const Container = styled.div`
     width:100%;
     padding:20px 0px;
     min-height:500px;  


     iframe{
        min-height:650px;
        background:var(--black);
        width:100% !important;
     }
 

      .text-area{ 
        width:100%; 

        h1{
            font-size:35px;
            line-height:45px;
            font-weight:bold;  
            margin:20px 0px;
        }

        p{
          max-width:1200px;
          margin-bottom:20px;
          color:#4F5D75 !important;
        }

          div{
              max-width:550px;
          }
      }
`;

export default Dreams