import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppContextProvider } from './conducer/00-index'
import App from './App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
)
