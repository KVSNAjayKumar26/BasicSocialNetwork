import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const LoginContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: linear-gradient(135deg, #4caf50, #81c784);
`;

const LoginForm = styled.form`
background: white;
padding: 30px;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
width: 100%;
`;

const Title = styled.h2`
margin-bottom: 20px;
text-align: center;
color: #333;
`;
const Input = styled.input`
width: 100%;
padding: 10px;
margin 10px 0;
border: 1px solid #ddd;
border-radius: 5px;
font-size: 16px;

&:focus {
border-color: #4caf50;
outline: none;
}
`;

const Button = styled.button`
width: 100%;
padding: 10px;
background: #4caf50;
color: white;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
margin-top: 10px;

&:hover {
background: #45a049;
}
`;

const Footer = styled.p`
text-align: center;
margin-top: 10px;
font-size: 14px;

a {
color: #4caf50;
text-decoration: none;

&:hover {
text-decoration: underline;
}
}
`
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login

    if ( email === "user@example.com" && password === "password") {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <Input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <Button type='submit'>Login</Button>
        <Footer>
          Don't have an account? <a href='/signup'>Sign Up</a>
        </Footer>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;