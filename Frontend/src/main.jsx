import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//for context
import AuthContext from './context/authContext.jsx'
import UserContext from './context/UserContext.jsx'

//for routing
import { BrowserRouter} from "react-router";
import ShopContext from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext>
    <UserContext>
      <ShopContext>
    <App />
    </ShopContext>
    </UserContext>
    </AuthContext>
  </BrowserRouter>
)
