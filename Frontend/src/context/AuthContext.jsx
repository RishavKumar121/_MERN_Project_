import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

export const authDataContext = createContext()


const AuthContext = ({children}) => {

    let serverUrl = "http://localhost:8181"

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