import React from 'react'
import { styled } from 'styled-components';
const AppImg =  require("../../Assets/images/app.png")

function AppMock() {
  return (
     <Container>
          <div className="wrapper">
            <div className="text-area">
                <div>
                    <h1>O Unico Banco em Angola facilitando a vida dos clientes</h1>
                </div>
                <div>
                    <p>É cada vez mais importante e valorizado pelas novas gerações. Angola é a nossa casa e nós fazemo-la crescer. Queremos ser Mais que um Banco e melhorar a vida das Pessoas.
                    </p>
                </div>
            </div>
            <div className="app-image">
                <img src={AppImg} alt="" />
            </div>
        </div>
     </Container>
  )
}

const Container = styled.div`
     width:100%;
     padding:60px 0px;
     min-height:500px; 
 

     .app-image{
        display: flex;  
        width:100%;
        margin-top:20px;

          img{
              width:100%;
              max-width:1350px; 
          }
     }

      .text-area{
        display: flex; 
        justify-content: space-between;  
        width:100%;

        h1{
            font-size:35px;
            line-height:45px;
            font-weight:bold;
        }

        p{
            color:#4F5D75 !important;
        }

          div{
              max-width:550px;
          }
      }
`;


export default AppMock