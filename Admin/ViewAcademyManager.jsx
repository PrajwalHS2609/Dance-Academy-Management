import React, { useEffect, useState } from "react";
import axiosInstance from "../helper/axiosInstance";
import { Link } from 'react-router-dom';

const ViewAcademyManager = () => {
  let token = localStorage.getItem("token");
  let [manager, setManager] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await axiosInstance.get("/academymanagers/getall", {
          headers: { Authorization: `Bearer ${token}` },
        });
        let finalData = data.data;
        setManager(finalData);
        console.log(finalData);
      } catch {
        alert("Error getting");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="viewBlock">
      {/* <div>
        <h1 id="h1"> total no of managers : {manager.length}</h1>
      </div> */}
      {manager.map((x) => {
        return (
          <div key={x.id} className="viewMain">
            <div>
              <span>Name : </span> {x.userName}
            </div>
            <div>
              <span>Designation : </span> {x.role}
            </div>
            <div>
              <span>D.O.B :</span> {x.dob}
            </div>
            <div>
              <span>Phone :</span> {x.phone}
            </div>
            <div>
              <span>Email : </span> {x.email}
            </div>
            <div>
              <span>Gender : </span>
              {x.gender}
            </div>
           <Link to={`/admindash/viewmanager/vieweachmanager/${x.id}`}> <button>View</button></Link>
          </div>
        );
      })}
    </div>
  );
};

export default ViewAcademyManager;
