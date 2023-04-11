import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Routes from './router';
import './App.css'
import { Button } from 'antd';
function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>Vite + React员工管理系统</div>

      <Routes />
    </div>
  )
}

export default App
