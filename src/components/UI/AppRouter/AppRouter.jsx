import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../context/insex";
import { publicRoutes, privateRoutes } from "../../../router";
import MyLoader from "../loader/MyLoader";

function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <MyLoader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.element}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.element}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
}

export default AppRouter;

// <Route
// path="*"
// element={<Navigate to="/error" />}
// />
