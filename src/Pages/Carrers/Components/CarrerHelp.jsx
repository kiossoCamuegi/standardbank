import React from 'react'
import styled from 'styled-components'

function CarrerHelp() {
  return (
    <Container>
          <div className="wrapper">
              <div className="content">
                  <h1>Venha construir o Futuro da ecónomia connosco !</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Amet maxime quaerat eum voluptatum mollitia, laboriosam quae eligendi aperiam non suscipit.</p>
                  <button className="btn bg-light mt-4 text-blue">Saiba mais</button>
              </div>
          </div>
    </Container>
  )
}

const Container = styled.div`
     background:var(--blue);
     padding:40px 0px;
     width:100%;
     min-height:200px; 
     color:#ffff;

     .content{
        color:#ffff;

        h1,p{
            max-width:750px;
            color:#ffff;
        }

        
       h1{
        font-size: 35px;
        line-height: 45px;
        font-weight: bold;
        margin: 20px 0px; 
    }


     }




 `;

export default CarrerHelp
