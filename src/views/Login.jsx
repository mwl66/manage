import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd'
import React from 'react'

function Login(){
  const navigate = useNavigate();
  return (
    <div>
      <div>
        欢迎页
      </div>
      <button onClick={() => {
        navigate('/welcome')
      }}>回首页</button>
    </div>
  )
}

export default Login
