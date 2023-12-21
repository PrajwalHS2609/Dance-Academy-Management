import React, {  useState } from "react";
import axiosInstance from "../helper/axiosInstance";
import { useParams } from "react-router-dom";
import style from "./add.module.css"

const AddAcademy = () => {
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

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        academyName,
        description,
        email,
        contact,
      };
      let finalData = await axiosInstance.post(
        `/academies/saveacademy?managerId=${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(`Successfully added`);

      console.log(finalData);
    } catch {
      alert(`Failed to save`);
    }
  };
  return (
    <div className={style.addMain}>
    <form action="" onSubmit={handleSubmit} className={style.addForm} >
      <fieldset className={style.addField}>
        <legend>Add Academy</legend>
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
        <button type="submit">Submit</button>
        <br />
        <br />
      </fieldset>
    </form>
    </div>
  );
};

export default AddAcademy;
