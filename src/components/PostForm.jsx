import React, { useState } from "react";
import MyButton from "./UI/button/MyButton.jsx";
import MyInput from "./UI/input/MyInput.jsx";
import PostItem from "./PostItem.jsx";

function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
        type="text"
        placeholder="Назва постику"
      />
      <MyInput
        value={post.body}
        onChange={(e) => {
          setPost({ ...post, body: e.target.value });
        }}
        type="text"
        placeholder="Текст постику"
      />
      <MyButton
        onClick={addNewPost}
        disabled={false}
        // style={{ fontSize: "24px" }}
      >
        Додати елемент
      </MyButton>
    </form>
  );
}

export default PostForm;
