import React, { useState } from "react";
import style from "./membership.module.css";
import axiosInstance from "./helper/axiosInstance";
import { useParams } from "react-router-dom";
const MembershipReg = () => {
  let { id } = useParams();
  let token = localStorage.getItem("token");
  let bid=localStorage.getItem("bid");
  let uid=localStorage.getItem("uid");
  let [member, setMember] = useState({
    dateOfJoin: "",
    endDate: "",
    status: "",
    totalFee: "",
  });
  let { dateOfJoin, endDate, status, totalFee } = member;

  let handleData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setMember({ ...member, [name]: value });
  };

  let handleRegister = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        dateOfJoin,
        endDate,
        status,
        totalFee,
      };
      let finalData = await axiosInstance.post(
        `/memberships/createmembership?branchId=${bid}&danceCourseId=${id}&userId=${uid}`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(finalData);
      alert("Successfully Registered");
    } catch {
      alert("Error registering");
    }
  };

  return (
    <div>
      <form
        action=""
        className={style.membershipForm}
        onSubmit={handleRegister}
      >
        <fieldset className={style.membershipField}>
          <legend>Membership Register</legend>
          <br />
          <label htmlFor="doj">Date of Joining :</label>
          <input
            type="date"
            id="doj"
            name="dateOfJoin"
            value={dateOfJoin}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="med">Membership End Date :</label>
          <input
            type="date"
            id="med"
            name="endDate"
            value={endDate}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="status">Status : </label>
          <input
            type="text"
            name="status"
            id="status"
            value={status}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="total">Total Fee : </label>
          <input
            type="number"
            id="total"
            name="totalFee"
            value={totalFee}
            onChange={handleData}
          />
          <br />
          <br />
          <button type="submit">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default MembershipReg;
