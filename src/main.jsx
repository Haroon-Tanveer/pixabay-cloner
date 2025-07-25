
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PixabayState from './context/pixabayState.jsx'


createRoot(document.getElementById('root')).render(
  <PixabayState>
    <App />
  </PixabayState>
)
