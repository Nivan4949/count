import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Count from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Count />
  </StrictMode>,
)
