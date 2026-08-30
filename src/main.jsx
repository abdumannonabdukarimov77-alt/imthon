
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/app'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </div>
)
