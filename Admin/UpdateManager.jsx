import React, { useEffect, useState } from "react";
import axiosInstance from "../helper/axiosInstance";
import { useParams } from "react-router-dom";
import style from "./Update.module.css"
const UpdateManager = () => {
  let { id } = useParams();

  let [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    gender: "",
  });

  let token = localStorage.getItem("token");

  let { userName, email, password, dob, phone, gender } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  useEffect(() => {
    let fetch = async () => {
      try {
        let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        let finalData = data.data;
        console.log(finalData);
        setData(finalData);
        console.log("success");
      } catch {
        alert("error");
      }
    };
    fetch();
  }, []);

  let handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        userName,
        email,
        password,
        dob,
        phone,
        gender,
        id,
      };
      let finalData = await axiosInstance.put(
        `/academymanagers/update`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(finalData);
      alert("updated successfully");
      window.location.assign("/admindash/viewmanager");
    } catch {
      alert("Error updating");
    }
  };

  return (
    <div className={style.updateMain}>
    <form className={style.updateForm} action="" onSubmit={handleUpdate}>
      <fieldset className={style.updateField}>
        <legend>Update</legend>
        <br />
        <label htmlFor="uname">UserName : </label>
        <input
          type="text"
          id="uname"
          name="userName"
          value={userName}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="pwd">Password : </label>
        <input
          type="password"
          id="pwd"
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
        <input type="radio" name="gender" id="gender" value={"Male"} />
        Male
        <input type="radio" name="gender" id="gender" value={"Female"} />
        Female
        <br />
        <br />
        <button type="submit">Update</button>
      </fieldset>
    </form>
    </div>
  );
};

export default UpdateManager;
