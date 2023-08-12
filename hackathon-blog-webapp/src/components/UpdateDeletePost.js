import axios from "axios";
import React, { useState } from "react";

const UpdateDeletePost = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [tags, setTags] = useState(post.tags.join(", "));

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `https://8080-ffccfffadcaefbecfbaffffddddabcdbfbebdb.premiumproject.examly.io/posts/${post.id}`,
        {
          title,
          content,
          tags: tags.split(",").map((tag) => tag.trim()),
        },
      );
      alert("Updated successfully");
    } catch (error) {
      alert("An error occurred while updating the post ", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://8080-ffccfffadcaefbecfbaffffddddabcdbfbebdb.premiumproject.examly.io/posts/${post.id}`,
      );
      alert("Deleted successfully");
    } catch (error) {
      alert("An error occurred while deleting the post ", error);
    }
  };

  return (
    <div>
      <h3>Update/Delete Post</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Post</button>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default UpdateDeletePost;
