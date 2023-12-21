import React, { useEffect, useState } from "react";
import style from "./Update.module.css";
import axiosInstance from "../helper/axiosInstance";
import { useParams } from "react-router-dom";

const UpdateCourse = () => {
  let { id } = useParams();
  let token = localStorage.getItem("token");
  let [course, setCourse] = useState({
    courseDuration: "",
    fee: "",
    image: "",
    type: "",
  });
  let { image, courseDuration, fee, type } = course;

  useEffect(() => {
    let fetch = async () => {
      try {
        let { data } = await axiosInstance.get(`/dancecourses/get/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        let finalData = data.data;
        setCourse(finalData);
        console.log("success");
      } catch {
        alert("error fetching course");
      }
    };
    fetch();
  }, []);

  let handleData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setCourse({ ...course, [name]: value });
  };

let handleUpdate = async(e) => {
  e.preventDefault();
  try {
    let payload = {
      image,
      courseDuration,
      fee,
      type,
    };
    await axiosInstance.put(`/dancecourses/update/${id}`,payload,{headers:{Authorization:`Bearer ${token}`}})
    alert("successfully updated")
    window.location.assign("/admindash/viewcourse");

  } catch {
    alert("Failed to update")
  }
}
  return (
    <div className={style.addMain}>
      <form className={style.addForm} onSubmit={handleUpdate}>
        <fieldset className={style.addField}>
          <legend>Update Course</legend>
          <br />
          <label htmlFor="date">Course Duration : </label>
          <input
            type="text"
            id="date"
            placeholder="in months"
            onChange={handleData}
            name="courseDuration"
            value={courseDuration}
          />
          <br />
          <br />
          <label htmlFor="fee">Fee : </label>
          <input
            type="number"
            id="fee"
            onChange={handleData}
            name="fee"
            value={fee}
          />
          <br />
          <br />
          <textarea
            name="image"
            id=""
            value={image}
            cols="20"
            rows="6"
          ></textarea>
          {/* <input type="text" onChange={handleData} name="image" value={image}/> */}
          <br />
          <br />
          <label htmlFor="type">Dance type : </label>
          <input
            type="text"
            id="type"
            onChange={handleData}
            name="type"
            value={type}
          />
          <br />
          <br />
          <button type="submit">Update</button>
          <br />
          <br />
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateCourse;
