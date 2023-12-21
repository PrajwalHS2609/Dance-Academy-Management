import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import axiosInstance from "./helper/axiosInstance";
import { Link } from "react-router-dom";

const BranchPage = () => {
  let [branch, setBranch] = useState([]);
  let token = localStorage.getItem("token");
  useEffect(() => {
    let fetch = async () => {
      let { data } = await axiosInstance.get(`/branches/getall`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let finalData = data.data;
      setBranch(finalData);
      console.log("successfully fetched branch");
    };
    fetch();
  }, []);
  return (
    <div className={style.branchMainPg}>
      {branch.map((x) => {
        return (
          <div className={style.branchContainer}>
            <div>
              <span>Branch id : </span> {x.id}
            </div>

            <div>
              <span>Address : </span>
              {x.address}
            </div>

            <div>
              <span>City : </span>
              {x.city}
            </div>

            <div>
              <span> Phone : </span>
              {x.phone}
            </div>

            <div>
              <span>Pincode : </span>
              {x.pincode}
            </div>
            <div>
              <Link to={`/usercourse/${x.id}`}>
                <button className={style.branchBtn}>View</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BranchPage;
