import React from 'react'
import { AppRouter } from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const JournalApp = () => {
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  )
}

export default JournalApp;