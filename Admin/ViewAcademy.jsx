import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../helper/axiosInstance";
import { Link } from "react-router-dom";
import style from "./viewAcademy.module.css"

const ViewAcademy = () => {

  let token = localStorage.getItem("token");

  let [academy, setAcademy] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/academies/getall`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let finalData = data.data;
      setAcademy(finalData);
      console.log(finalData);
    };
    fetchData();
  }, []);

  let handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/academies/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("deleted");
      window.location.assign("/admindash/viewmanager");
    } catch {
      alert("failed to delete");
    }
  };

  return (
    <div className={style.viewacademy}>
      <table>
        <tr>
          <th>Academy Name</th>
          <th>Description</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Delete/Update/Add to Branch</th>
        </tr>
        {academy.map((x) => {
          return (
            <tr>
              <td>{x.academyName}</td>
              <td>{x.description}</td>
              <td>{x.email}</td>
              <td>{x.contact}</td>
              <td>
                <div style={{display:"flex" ,justifyContent:"space-between", alignItems:"center"}}>
                  <button
                    onClick={() => {
                      handleDelete(x.id);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={`/admindash/viewacademy/updateacademy/${x.id}`} ><button>Update</button></Link>
                 <Link to={`/admindash/viewacademy/addbranch/${x.id}`}> <button className={style.branch} >Add To Branch</button></Link>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ViewAcademy;
