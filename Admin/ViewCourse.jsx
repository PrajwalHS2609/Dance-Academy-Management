import React, { useEffect, useState } from "react";
import style from "./view.module.css";
import axiosInstance from "../helper/axiosInstance";
import { Link } from "react-router-dom";
const ViewCourse = () => {
  let [course, setCourse] = useState([]);
  let token = localStorage.getItem("token");
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/dancecourses/getall`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      let finalData = data.data;
      setCourse(finalData);
    };
    fetchData();
  }, []);

  let handleDelete = async (x) => {
    await axiosInstance.delete(`/dancecourses/delete/${x}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("deleted successfully");
    window.location.assign(`/admindash/viewcourse`);
  };

  return (
    <div className={style.courseMain}>
      <table className={style.courseTable}>
        <tr>
          <th>Images</th>
          <th>Course Durations</th>
          <th>Fees</th>
          <th>Dance Types</th>
          <th>Update/Delete</th>
        </tr>
        {course.map((x) => {
          return (
            <tr>
              <td>{x.image}</td>
              <td>{x.courseDuration}</td>
              <td>{x.fee}</td>
              <td>{x.type}</td>
              <td>
                <Link to={`/admindash/viewcourse/updateCourse/${x.id}`}>
                  <button>Update</button>
                </Link>
                <button
                  onClick={() => {
                    handleDelete(x.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ViewCourse;
