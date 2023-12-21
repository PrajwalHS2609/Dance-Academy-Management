import React, { useState } from "react";
import axiosInstance from "../helper/axiosInstance";
import { useParams } from "react-router-dom";
import style from "./add.module.css"

const AddBranch = () => {
  let { id } = useParams();
  let token = localStorage.getItem("token");
  let [branch, setBranch] = useState({
    address: "",
    city: "",
    phone: "",
    pincode: "",
  });
  let { address, city, phone, pincode } = branch;

  let handleData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setBranch({ ...branch, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        address,
        city,
        phone,
        pincode,
      };
      let data = await axiosInstance.post(`/branches/save?aid=${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      alert("successfully added");
      window.location.assign("/admindash/viewacademy")
    } catch {
      alert("Failed to add branch");
    }
  };
  return (
    <div className={style.addMain}>
    <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add Branch</legend>
        <br />
        <br />
        <label htmlFor="address">Address : </label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="city">City : </label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
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
        <label htmlFor="pincode">Pincode : </label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          value={pincode}
          onChange={handleData}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
    </div>
  );
};

export default AddBranch;
