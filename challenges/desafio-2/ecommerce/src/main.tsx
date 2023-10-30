import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import React from 'react'
import ShopCartProvider from './context/shopCartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ShopCartProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ShopCartProvider>
)
