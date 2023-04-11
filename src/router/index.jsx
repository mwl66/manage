import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useRoutes,
  Navigate,
} from "react-router-dom";
import React from "react";
import Welcome from "../views/Welcome";
import Home from "../views/Home";
import Login from "../views/Login";
const routes = () => {
  // const element = useRoutes([
  //   {
  //     path: "/home",
  //     // element: <Navigate to='/welcome'/>,
  //     // 重定向
  //     children: [
  //       { path: "welcome", element: <Welcome /> },
  //       { path: "login", element: <Login /> },
  //     ],
  //   },
  // ]);

  return <div>
    <Routes>
      <Route path="/home" element={<Navigate to='/welcome'/>}></Route>
      <Route path="/welcome" element={<Welcome/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </div>

};

export default routes;
