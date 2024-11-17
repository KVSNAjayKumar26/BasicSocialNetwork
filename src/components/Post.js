import React from 'react'
import { FaComment, FaHeart, FaShare } from 'react-icons/fa';
import styled from 'styled-components'

const PostContainer = styled.div`
background: white;
border-radius: 8px;
margin-bottom: 20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 15px;
transition: transform 0.2s ease;

&:hover {
transform: scale(1.02);
}
`;

const Header = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
`;

const Avatar = styled.img `
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 10px;
`;

const Username = styled.h3`
font-size: 16px;
margin: 0;
color: #333;
`;

const Content = styled.p`
font-size: 14px;
margin: 10px 0;
color: #555;
`;

const Footer = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
`;

const IconButton = styled.button`
background: none;
border: none;
color: #888;
font-size: 16px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;

&:hover {
color: #4caf50;
}
`;

const Post = ({ avatar, username, content}) => {
  return (
    <PostContainer>
        <Header>
            <Avatar src={avatar} alt={`${username}'s avatar`} />
            <Username>{username}</Username>
        </Header>
        <Content>{content}</Content>
        <Footer>
            <IconButton>
                <FaHeart /> Like
            </IconButton>
            <IconButton>
                <FaComment /> Comment
            </IconButton>
            <IconButton>
                <FaShare /> Share
            </IconButton>
        </Footer>
    </PostContainer>
  )
}

export default Post