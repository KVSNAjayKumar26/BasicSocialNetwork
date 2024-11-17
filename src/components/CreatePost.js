import React, { useState } from 'react'

const CreatePost = () => {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Post submitted:", content);
        setContent("");
    };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
        <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
        style={{ width: "100%", marginBottom: "10px" }}
        placeholder='Write something...'
        />
        <button type='submit'>Post</button>
    </form>
  );
};

export default CreatePost;