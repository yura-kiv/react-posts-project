import { Navigate } from "react-router-dom";
import About from "../pages/About.jsx";
import Error from "../pages/Error.jsx";
import Login from "../pages/Login.jsx";
import PostItem from "../pages/PostItemId";
import Posts from "../pages/Posts.jsx";

export const privateRoutes = [
  { path: "/about", element: <About />, exact: true },
  { path: "/error", element: <Error />, exact: true },
  { path: "/posts", element: <Posts />, exact: true },
  { path: "/posts/:id", element: <PostItem />, exact: true },
  { path: "/login", element: <Navigate to="/posts" />, exact: true },
  { path: "/*", element: <Navigate to="/error" />, exact: true },
  { path: "", element: <Navigate to="/posts" />, exact: true },
];

export const publicRoutes = [
  { path: "/login", element: <Login />, exact: true },
  { path: "/about", element: <About />, exact: true },
  { path: "/*", element: <Navigate to="/login" />, exact: true },
  { path: "", element: <Navigate to="/login" />, exact: true },
];
