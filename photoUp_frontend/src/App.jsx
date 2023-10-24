import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Login from './components/login'
import Home from './container/home'
import { gapi } from "gapi-script";

function App() {
      const [count, setCount] = useState(0)

  return (
    
    <Routes>
      <Route path="Login" element={<Login/>} />
      <Route path="/*" element={<Home/>} />
    </Routes>
   
  )
}

export default App
