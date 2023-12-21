import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "./helper/axiosInstance";

const UserCourse = () => {
  let { id } = useParams();
  let token = localStorage.getItem("token");
  localStorage.setItem("bid",id);
  let [course, setCourse] = useState([]);
  useEffect(() => {
    let fetch = async () => {
      let { data } = await axiosInstance.get(
        `/dancecourses/getbybranchid/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      let finalData = data.data;
      setCourse(finalData);
      console.log("successfully fetched course");
    };
    fetch();
  }, []);
  return (
    <div className={style.ucMain}>
      {course.map((x) => {
        return (
          <div className={style.courseContainer}>
            <div>
              <span>Course ID : </span> {x.id}
            </div>

            <div>
              <span>Course Duration : </span>
              {x.courseDuration}
            </div>

            <div>
              <span>fee : </span>
              {x.fee}
            </div>

            <div>
              <span> Dance Type : </span>
              {x.type}
            </div>
            <div>
              <Link to={`/membership/${x.id}`}>
                <button>Register</button>
              </Link>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default UserCourse;
