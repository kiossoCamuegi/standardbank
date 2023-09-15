import React from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Logo = require("../../Assets/images/sb24.png");

function Sb_signin() {
    document.title = "Standard bank - sb24 particulares"
  return (
    <div className='sb-auth' >
       <div className="sb-form">
       <Form>
         <Link to="/">
           <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </Link>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value="kiossocamuegi@gmail.com"  placeholder="Email" />
              <Form.Text className="text-muted">
                As suas informações são totalmente confidenciais
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value="123456789" placeholder="Password" />
            </Form.Group>
           <div className="space">
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembrar sempre" />
            </Form.Group>
            <div>  <Link to="#" className='text-blue'> esqueceu a sua password ?</Link></div>
           </div>
             <Link to="/sb24_dashboard"><button className="btn bg-blue text-light">Entar</button></Link> 
          </Form>
       </div>
    </div>
  )
}

export default Sb_signin