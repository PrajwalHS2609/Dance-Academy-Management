import React from 'react'
import "./Admin.css"
import {Outlet} from 'react-router'
const AdminMain = () => {
  return (
    <div className='adminmain'>
        <Outlet/>
    </div>
  )
}

export default AdminMain
