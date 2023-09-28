import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoute } from '../auth/routes/AuthRoute'
import { JournalRoute } from '../journal/routes/JournalRoute'

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path='/auth/*' element={<AuthRoute />}/>
      {/* JournalAPP */}
      <Route path='/*' element={<JournalRoute />}/>
      <Route />
    </Routes>
  )
}
