import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

export const AuthRoute = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='register' element={<RegisterPage />}></Route>
      <Route path='/*' element={<Navigate to={"/auth/login"} />}></Route>
    </Routes>
  )
}
