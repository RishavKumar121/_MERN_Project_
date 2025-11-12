import React, { Children, createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./authContext";
import axios from "axios";

export const adminDataContext = createContext();

const AdminContext = ({ children }) => {
  const [adminData, setAdminData] = useState("");

  let { serverURL } = useContext(authDataContext);

  const getAdmin = async () => {
    try {
      let response = await axios.get(serverURL + "/api/user/getadmin", {
        withCredentials: true,
      });
      setAdminData(response.data);
      console.log(response.data);
    } catch (error) {
      setAdminData(null)
      console.log(error);
    }
  };

  useEffect(()=>{
    getAdmin()
  },[])

  let value = {
    adminData, setAdminData, getAdmin
  }
  return (
    <div>
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>
    </div>
  );
};

export default AdminContext;
