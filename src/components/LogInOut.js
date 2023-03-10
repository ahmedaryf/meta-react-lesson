import React from 'react'
import Button from './Button';

function LogInOut() {
    const isLogin = true;
  return (
    <div>
        {isLogin ? <Button name="Logout" /> : <Button name="Login" />}
    </div>
  )
}

export default LogInOut