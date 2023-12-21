import React, { useState } from "react";
import axiosInstance from "./helper/axiosInstance";
import style from "./login.module.css";

const Login = () => {
  let [data, setData] = useState({
    userEmail: "",
    password: "",
  });
  let { userEmail, password } = data;
  let handleOnchange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        userEmail,
        password,
      };
      let { data } = await axiosInstance.post("/authenticate", payload);
      console.log(data);
      let token = data.token;
      let role = data.role;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        alert(`Authentication successful`);
        window.location.assign("/home");
      }
    } catch {
      alert("Error");
    }
  };
  return (
    <div className={style.main}>
      <form action="" className={style.form} onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <span>Login</span> Page
          </legend>
          <br />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            name="userEmail"
            value={userEmail}
            id="email"
            onChange={handleOnchange}
          />
          <br />
          <br />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleOnchange}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
