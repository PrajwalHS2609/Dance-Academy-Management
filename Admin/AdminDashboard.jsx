import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminMain from "./AdminMain";
import "./Admin.css"
const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <AdminSidebar/>
      <AdminMain />
    </div>
  );
};

export default AdminDashboard;
