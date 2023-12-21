import React, { useEffect, useState } from "react";
import axiosInstance from "./../helper/axiosInstance";
import { useParams } from "react-router-dom";
import style from "./Update.module.css";

const BranchUpdate = () => {
  let { id } = useParams();
  let token = localStorage.getItem("token");

  let [branch, setBranch] = useState({
    address: "",
    city: "",
    phone: "",
    pincode: "",
    id: "",
  });
  let { address, city, phone, pincode } = branch;

  let handleData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setBranch({ ...branch, [name]: value });
  };
  useEffect(() => {
    let fetch = async () => {
      let { data } = await axiosInstance.get(`/branches/get/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      let finalData = data.data;
      setBranch(finalData);
    };
    fetch();
  }, []);

  let handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        address,
        city,
        phone,
        pincode,
        id,
      };
      await axiosInstance.put(`/branches/update/${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("successfully updated");
      window.location.assign(`/admindash/viewbranch`);
    } catch {
      alert("Error updating branch");
    }
  };

  return (
    <div className={style.updateMain}>
      <form action="" className={style.updateForm} onSubmit={handleUpdate}>
        <fieldset className={style.updateField}>
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
          <button type="submit">Update</button>
          <br/><br/>
        </fieldset>
      </form>
    </div>
  );
};

export default BranchUpdate;
