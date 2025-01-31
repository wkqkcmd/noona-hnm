import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const login = (e) =>{
    e.preventDefault();
    setAuthenticate(true);
    navigate('/');
  }


  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button onClick={(e)=>{login(e)}} variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
