import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {TokenProvider} from './Contexts/TokenContext.jsx'
import { LoginProvider } from './Contexts/LoginContext.jsx'

createRoot(document.getElementById('root')).render(
  <TokenProvider>
    <LoginProvider>
    <App />
    </LoginProvider>
  </TokenProvider>


  
)
