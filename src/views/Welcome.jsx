import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Welcome (){
  return (
    <div>
      <div>
        欢迎页
      </div>
      <Link to='/login'>去登录</Link>
    </div>
  )
}

export default Welcome
