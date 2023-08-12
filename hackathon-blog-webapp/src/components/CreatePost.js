import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const DB_URL = process.env.REACT_APP_DB_URL

  const getCurrentUserName = () => {
    //need to fetch the current user name
    return "test user1"
  }
  const handleCreatePost = async () => {
    try {
      const response = await axios.post(
        `${DB_URL}/posts`,
        {
          title,
          content,
          tags: tags.split(",").map((tag) => tag.trim()),
          date: Date(),
          author: getCurrentUserName()
        },
      );
    } catch (error) {
      alert("An error occurred while creating the post ", error);
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br/>
      <input
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;
