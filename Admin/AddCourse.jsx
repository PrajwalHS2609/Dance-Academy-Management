import React, { useState } from "react";
import style from "./add.module.css";
import axiosInstance from "../helper/axiosInstance";
import { useParams } from "react-router-dom";
const AddCourse = () => {
  let token = localStorage.getItem("token");
let{id}=useParams()
  let [course, setCourse] = useState({
    courseDuration: "",
    fee: "",
    image: "",
    type: "",
  });

  let { courseDuration, fee, image, type } = course;

  let handleData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setCourse({ ...course, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        courseDuration,
        fee,
        image,
        type,
      };
      await axiosInstance.post(`/dancecourses/save?branchid=${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Successfully added course")
    } catch {
      alert("Failed to add course")
    }
  };

  return (
    <div className={style.addMain}>
      <form className={style.addForm} onSubmit={handleSubmit}>
        <fieldset className={style.addField}>
          <legend>Add Course</legend>
          <br />
          <label htmlFor="date">Course Duration : </label>
          <input
            type="date"
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
          <button type="submit">Add</button>
          <br />
          <br />
        </fieldset>
      </form>
    </div>
  );
};

export default AddCourse;
