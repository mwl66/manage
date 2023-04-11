import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Button } from "antd";
import "antd/dist/reset.css";
import axios from "axios";
import config from "./config";
console.log('config', config?.mockApi+'/login');
axios.get(config?.mockApi + '/login').then(res => {
  console.log('res', res);
}).catch(err => {
  console.log('获取结果失败!');
})
ReactDOM.createRoot(document.getElementById("root")).render(
  // 路由包裹
  <Router>
    <App/>
  </Router>

);
// console.log("环境变量", import.meta.env);
