import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

export const authDataContext = createContext()


const AuthContext = ({children}) => {

    let serverUrl = "https://mern-project-backend-4i19.onrender.com"

    let value = {
        serverUrl
    }
  return (
    <div>
   <authDataContext.Provider value={value}>
    {children}
   </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
