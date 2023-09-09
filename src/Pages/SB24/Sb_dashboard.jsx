import React from 'react'
import { styled } from 'styled-components'
import Sidebar from './Components/Sidebar';
import MainComponent from './Components/MainComponent';

function Sb_dashboard() {
  return (
     <Container>
        <Sidebar />
        <MainComponent />
     </Container>
  )
}

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;

`;

export default Sb_dashboard