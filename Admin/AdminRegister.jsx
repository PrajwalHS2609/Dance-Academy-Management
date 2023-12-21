import React, { useState } from "react";
import style from "./adminreg.module.css";
import axiosInstance from "../helper/axiosInstance";
const AdminReg = () => {
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
      let finalData = await axiosInstance.post("/admins/save", payload);
      console.log(finalData);
      alert(`successfully registered with ${email} as user`);
    } catch {
      alert("error saving");
    }
  };

  return (
    <div>
      <div className={style.block}>
        <img
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0fGVufDB8fDB8fHww"
          alt=""
        />
        <form action="" className={style.regForm} onSubmit={handleSubmit}>
          <fieldset className={style.fieldset}>
            <legend>
              Admin <span>Register</span> Form
            </legend>
            <br />
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
    </div>
  );
};

export default AdminReg;
