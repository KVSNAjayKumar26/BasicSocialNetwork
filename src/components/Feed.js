import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Post from './Post';
const FeedContainer = styled.div`
padding: 20px;
`;

const PostCard = styled(motion.div)`
background: white;
border-radius: 8px;
margin-bottom: 20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 15px;
`;
const Feed = () => {
    const posts = [
        { id: 1, content: "Hello, world!" },
        { id: 2, content: "This is my first post." },
    ];

    const profileposts = [
        {
            id: 1,
            avatar: "https://via.placeholder.com/40",
            username: "Jane Doe",
            content: "This is my first post on SocialNet!",
          },
          {
            id: 2,
            avatar: "https://via.placeholder.com/40",
            username: "John Smith",
            content: "Enjoying the beautiful weather today! ☀️",
          },
    ];
    return (
        <><FeedContainer>
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p>{post.content}</p>
                </PostCard>
            ))}
        </FeedContainer>

        <div style={{ padding: "20px" }}>
            {profileposts.map((profilepost) => (
                <Post
                key={profilepost.id}
                avatar={profilepost.avatar}
                username={profilepost.username}
                content={profilepost.content}
                />
            ))}
            </div>
            </>


    );
};

export default Feed;