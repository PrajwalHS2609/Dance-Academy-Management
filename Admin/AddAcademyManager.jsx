import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../helper/axiosInstance";
import style from "./add.module.css"

const AddAcademyManager = () => {
  let token = localStorage.getItem("token");

  let [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    gender: "",
  });

  let { userName, email, password, dob, phone, gender } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        userName,
        email,
        password,
        phone,
        dob,
        gender,
      };
      let finalData = await axiosInstance.post(
        "/academymanagers/save",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(finalData);
      alert(`successfully registered with ${email} as user`);
    } catch {
      alert("error saving");
    }
  };
  return (
    <div className={style.addMain}>
      <Link to={"/admindash/addmanager"}> </Link>
      <form action="" className={style.addForm} onSubmit={handleSubmit}>
        <fieldset className={style.addField}>
          <legend>Add Manager</legend> <br />
          <label htmlFor="name">UserName : </label>
          <input
            type="text"
            id="name"
            name="userName"
            value={userName}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="date">DOB : </label>
          <input
            type="date"
            id="date"
            name="dob"
            value={dob}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="phone">Phone : </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="gender">Gender : </label>
          <input
            type="radio"
            name="gender"
            value={"male"}
            id="gender"
            onChange={handleData}
          />
          Male
          <input
            type="radio"
            name="gender"
            id="gender"
            value={"female"}
            onChange={handleData}
          />
          Female
          <br />
          <br />
          <button type="submit">Submit</button>
          <br />
          <br />
        </fieldset>
      </form>
    </div>
  );
};

export default AddAcademyManager;
