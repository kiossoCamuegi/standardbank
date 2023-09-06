import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Logo =  require("../Assets/images/logo1.png");

function Signin() {
  return (  
    <div className='auth'>
         <div className="signin">
          <div className="logo">
               <Link to="/"><img src={Logo} alt="" /></Link>
          </div>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                As suas informações são totalmente confidenciais
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembrar sempre" />
            </Form.Group>
             <button className="btn bg-blue text-light">Entar</button>
          </Form>
         </div>
    </div>
  )
}

export default Signin