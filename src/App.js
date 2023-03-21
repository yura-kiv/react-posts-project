import React, { useState, useRef, useMemo, useEffect } from "react";
import "../src/styles/style.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MyNavBar from "./components/UI/NavBar/MyNavBar";
import AppRouter from "./components/UI/AppRouter/AppRouter";
import { AuthContext } from "./context/insex";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setsIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setsIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <MyNavBar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;
