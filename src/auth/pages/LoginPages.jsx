import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPages = () => {
  const navigate = useNavigate();
  const onLoginHandle = () => {
    navigate('/marvel')
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLoginHandle}>
        Login
      </button>
    </div>
  )
}
