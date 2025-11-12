import React, { createContext } from 'react'

export const authDataContext = createContext()

const AuthContext = ({children}) => {
    
    let serverURL = "https://ecommerce-mernbackend.onrender.com"
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
