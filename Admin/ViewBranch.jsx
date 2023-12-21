import React, { useEffect, useState } from "react";
import axiosInstance from "./../helper/axiosInstance";
import style from "./branch.module.css";
import { Link } from "react-router-dom";
const ViewBranch = () => {
  let token = localStorage.getItem("token");
  let [branch, setBranch] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/branches/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let finalData = data.data;
      setBranch(finalData);
      console.log(finalData);
    };
    fetchData();
  }, []);

  let handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/branches/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("branch is deleted");
      window.location.assign("/admindash/viewbranch");
    } catch {
      alert("branch failed to deleted");
    }
  };

  return (
    <div className={style.branchMain}>
      <table className={style.branchTable}>
        <tr>
          <th>Address</th>
          <th>City</th>
          <th>Phone</th>
          <th>Pincode</th>
          <th>Update/Add/Delete</th>
        </tr>
        {branch.map((x) => {
          return (
            <tr>
              <td>{x.address}</td>
              <td>{x.city}</td>
              <td>{x.phone}</td>
              <td>{x.pincode}</td>
              <td>
                <div className={style.branchbtn}>
                  <button id="branchUpdate-btn">
                    <Link to={`/admindash/viewbranch/updatebranch/${x.id}`}>
                      Update
                    </Link>
                  </button>
                  <button id={style.addbranchbtn}>
                    <Link to={`/admindash/viewbranch/addcourse/${x.id}`}>Add Course</Link>
                  </button>
                  <button
                    id="branchDelete-btn"
                    onClick={() => {
                      handleDelete(x.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ViewBranch;
