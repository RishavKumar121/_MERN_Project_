import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import List from './pages/List'
import Add from "./pages/Add"
import Orders from "./pages/Orders"
import Login from './pages/Login'
import { adminDataContext } from './context/AdminContext'
  import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  let {adminData} = useContext(adminDataContext)
  return (
    <>
     <ToastContainer />
    { !adminData ? <Login/> :<>

      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/list' element={<List/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  </>
  }
  
    </>
  )
}

export default App