import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/insex";
import { Link } from "react-router-dom";

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Логінитись тут</h1>
      <form onSubmit={login}>
        <MyInput
          type="text"
          placeholder="login"
        />
        <MyInput
          type="password"
          placeholder="password"
        />
        <MyButton>Вхід</MyButton>
      </form>
    </div>
  );
}

export default Login;
