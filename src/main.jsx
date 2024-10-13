import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </Context>
)
