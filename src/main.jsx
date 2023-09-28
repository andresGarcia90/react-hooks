import React from 'react'
import ReactDOM from 'react-dom/client'
import JournalApp from './JournalApp.jsx'
import './styles.css'
import AppTheme from './theme/AppTheme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <JournalApp />
    </AppTheme>
  </React.StrictMode>,
)
