import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/insex";
import MyButton from "../button/MyButton";
import classes from "./MyNavBar.module.css";

function MyNavBar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navBar">
      <div className="navBar__links">
        <button
          onClick={logout}
          className={classes.link_button}
        >
          Вихід
        </button>
        <Link
          className={classes.link_button}
          to="/about"
        >
          About
        </Link>
        <Link
          className={classes.link_button}
          to="/posts"
        >
          Posts
        </Link>
      </div>
    </div>
  );
}

export default MyNavBar;
