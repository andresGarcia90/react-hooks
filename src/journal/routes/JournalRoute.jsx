import React from 'react'
import { JournalPage } from '../pages/JournalPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../auth/pages/LoginPage'

export const JournalRoute = () => {
  return (
    <Routes>
      <Route path='' element={<JournalPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/*' element={<Navigate to='/' />}></Route>
    </Routes>
  )
}
