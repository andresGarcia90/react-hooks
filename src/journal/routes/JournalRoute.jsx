import React from 'react'
import { JournalPage } from '../pages/JournalPage'
import { Navigate } from 'react-router-dom'

export const JournalRoute = () => {
  return (
    <Routes>
      <Route path='' element={<JournalPage />}></Route>
      <Route path='/*' element={<Navigate to='/' />}></Route>
    </Routes>
  )
}
