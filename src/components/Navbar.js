import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavbarContainer = styled.div`
background: linear-gradient(90deg, #4caf50, #81c784);
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
color: white;
font-size: 24px;
`;
const NavLinks = styled.div`
a {
margin: 0 15px;
color: white;
font-size: 18px;
}
`;
const Navbar = () => {
  return (
    <NavbarContainer>
        <Logo>SocialNet</Logo>
        <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/create">Create Post</Link>
        </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;