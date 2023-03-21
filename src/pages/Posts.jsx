import React, { useState, useRef, useMemo, useEffect } from "react";
import "../../src/styles/style.css";
import PostList from ".././components/PostList.jsx";
import MyButton from ".././components/UI/button/MyButton.jsx";
import PostForm from ".././components/PostForm.jsx";
import PostFilter from ".././components/PostFilter.jsx";
import MyModal from ".././components/UI/modal/MyModal.jsx";
import { usePosts } from ".././components/hooks/usePost.js";
import PostService from ".././API/PostService.js";
import MyLoader from ".././components/UI/loader/MyLoader.jsx";
import { useFetching } from ".././components/hooks/useFetching.js";
import { getPagesCount } from ".././utils/pages.js";
import MyPagination from ".././components/UI/pagination/MyPagination.jsx";
import { useObserver } from "../components/hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postErr] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: "15px", marginBottom: "15px" }}
        onClick={() => setModal(true)}
      >
        Створити модалку
      </MyButton>

      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кількість елементів для виведення..."
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 15, name: "15" },
          { value: -1, name: "Вивести всі" },
        ]}
      />

      {postErr && (
        <h2 style={{ textAlign: "center" }}>Oppppssss...${postErr}</h2>
      )}

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Постики про JS"
      />
      <div
        ref={lastElement}
        style={{ height: "20px", backgroundColor: "red" }}
      />

      {isPostsLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MyLoader />
        </div>
      )}
      <MyPagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}
export default Posts;
