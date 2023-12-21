import React from "react";
import { useEffect } from "react";
import axiosInstance from "../helper/axiosInstance";
import { useParams } from "react-router-dom";
import { useState } from "react";
import style from "./Update.module.css"

const UpdateAcademy = () => {
  let { id } = useParams();
  let token = localStorage.getItem("token");
  let [data, setData] = useState({
    academyName: "",
    description: "",
    email: "",
    contact: "",
  });
  let { academyName, description, email, contact } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/academies/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let finalData = data.data;
      setData(finalData);
    };
    fetchData();
  }, []);

  let handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        academyName,
        description,
        email,
        contact,
        id,
      };
      await axiosInstance.put(`/academies/update`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("updated Successful");
      window.location.assign("/admindash/viewacademy");
    } catch {
      alert("error");
    }
  };
  return (
    <div className={style.updateMain}>
    <form action="" className={style.updateForm} onSubmit={handleUpdate}>
      <fieldset  className={style.updateField}>
        <legend>Update Academy</legend>
        <br />
        <label htmlFor="name"> Academy name :</label>
        <input
          type="text"
          id="name"
          name="academyName"
          value={academyName}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="des">Description : </label>
        <input
          type="text"
          id="des"
          name="description"
          value={description}
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
        <label htmlFor="contact">Contact : </label>
        <input
          type="number"
          id="contact"
          name="contact"
          value={contact}
          onChange={handleData}
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

export default UpdateAcademy;
