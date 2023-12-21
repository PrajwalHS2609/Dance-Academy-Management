import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {


  let token =localStorage.getItem('token')
  if(token){
    return(
      <>
      {children}
      </>
    )
  }else{
    return(
      <>
      {alert("Please Login")}
      <Navigate to={"/login"}/>
      </>
    )
  }

}

export default ProtectedRoute
