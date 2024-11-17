import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #2196f3, #64b5f6);
`;

const SignupForm = styled.form`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
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
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #2196f3;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #1e88e5;
  }
`;

const Footer = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;

  a {
    color: #2196f3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate API call
    alert("Signup successful! You can now login.");
    navigate("/login");
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
        <Footer>
          Already have an account? <a href="/login">Login</a>
        </Footer>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
