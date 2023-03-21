import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../components/hooks/useFetching";
import MyLoader from "../components/UI/loader/MyLoader";

function PostItem() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getComById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  console.log(post);

  return (
    <div style={{ margin: "0px 50px" }}>
      <h2 style={{ marginTop: "15px" }}>
        Ви на сторінці поста ID = {params.id}
      </h2>

      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          <strong>{post.id}</strong>. {post.title}
          <div>{post.body}</div>
        </div>
      )}
      <br />
      <h2>Коментарі:</h2>
      <br />
      {isComLoading ? (
        <MyLoader />
      ) : (
        <div>
          {comments.map((comm) => {
            return (
              <div>
                <h3>{comm.email}</h3>
                <div>{comm.body}</div>
                <br />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PostItem;
