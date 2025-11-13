import React, { createContext } from 'react'

export const authDataContext = createContext()

const AuthContext = ({children}) => {
    
    let serverURL = "https://mern-project-backend-4i19.onrender.com"
    let value = {
        serverURL
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
