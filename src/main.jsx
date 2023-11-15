import React from 'react'
import ReactDOM from 'react-dom/client'
import JournalApp from './JournalApp.jsx'
import './styles.css'
import AppTheme from './theme/AppTheme.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <JournalApp />
      </AppTheme>
    </Provider>
  </React.StrictMode>,
)
