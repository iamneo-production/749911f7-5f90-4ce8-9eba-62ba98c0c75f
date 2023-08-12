import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleCreatePost = async () => {
    try {
      const response = await axios.post(
        "https://8080-ffccfffadcaefbecfbaffffddddabcdbfbebdb.premiumproject.examly.io/posts",
        {
          title,
          content,
          tags: tags.split(",").map((tag) => tag.trim()),
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
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
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
