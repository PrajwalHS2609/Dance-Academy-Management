import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../helper/axiosInstance";

const ViewEachManager = () => {
  let token = localStorage.getItem("token");
  let [manager, setManager] = useState([]);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(data);
        let finalData = data.data;
        setManager(finalData);
        console.log(finalData);
      } catch {
        alert("Error getting");
      }
    };
    fetchData();
  }, []);

  let handleDelete = async (id) => {
    await axiosInstance.delete(`/academymanagers/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Deleted");
    window.location.assign("/admindash/viewmanager");
  };

  return (
    <div className="viewBlock">
      <div className="viewMain">
        <div>
          <span>Name : </span> {manager.userName}
        </div>
        <div>
          <span>Designation : </span> {manager.role}
        </div>
        <div>
          <span>D.O.B :</span> {manager.dob}
        </div>
        <div>
          <span>Phone :</span> {manager.phone}
        </div>
        <div>
          <span>Email : </span> {manager.email}
        </div>
        <div>
          <span>Gender : </span>
          {manager.gender}
        </div>
        <div className="each-btn">
          <button id="update-btn">
            <Link to={`/admindash/viewmanager/vieweachmanager/updatemanager/${manager.id}`}>Update</Link>
          </button>
          <button id="add-btn">
            <Link to={`/admindash/viewmanager/vieweachmanager/addacademy/${manager.id}`}>Add Academy</Link>
          </button>
          <button
            id="delete-btn"
            onClick={() => {
              handleDelete(manager.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEachManager;
