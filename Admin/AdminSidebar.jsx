import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <Link to={"/admindash/addmanager"}>
        <li className="li1"> Add Academy Manager</li>
      </Link>
      <Link to={"/admindash/viewmanager"}>
        <li className="li2">View Academy Manager</li>
      </Link>
      <Link to={"/admindash/viewacademy"}>
        <li className="li3">View Academy</li>
      </Link>
      <Link to={"/admindash/viewbranch"}>
        <li className="li4">View Branch</li>
      </Link>
      <Link to={"/admindash/viewcourse"}>
        <li className="li5">View Course</li>
      </Link>
      <Link to={"/home"}>
        <li className="li6">Home</li>
      </Link>
    </div>
  );
};

export default AdminSidebar;
