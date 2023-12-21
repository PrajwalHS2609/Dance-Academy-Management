import React from "react";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");

  let handleLogout = () => {
    localStorage.clear();
    alert("Logged out");
    window.location.assign("/login");
  };
  return (
    <div className={style.block}>
      <div className={style.item} id={style.item1}>
        <div className={style.home}>
          <Link to={"/home"}>Home</Link>
        </div>
        <div className={style.inner1}></div>
      </div>
      <div className={style.item} id={style.item1}>
        <div className={style.home}>
          <Link to={"/about"}>About</Link>
        </div>
        <div className={style.inner1}></div>
      </div>
      <div className={style.item} id={style.item1}>
        <div className={style.home}>
          <Link to={"/gallery"}>Gallery</Link>
        </div>

        <div className={style.inner1}></div>
      </div>

      {role === "ROLE_ADMIN" ? (
        <div className={style.item2} id={style.item1}>
          <div className={style.home}>
            <Link to={"/admindash"}>AdminDashboard</Link>
          </div>
          <div className={style.inner1}></div>
        </div>
      ) : null}

      <div className={style.item} id={style.item1}>
        {token ? (
          <div className={style.home} onClick={handleLogout}>
            <Link to={"/login"}>LogOut</Link>
          </div>
        ) : (
          <div className={style.home}>
            <Link to={"/login"}>Login</Link>
          </div>
        )}
        <div className={style.inner1}></div>
      </div>
      <div className={style.item} id={style.item1}>
        {token ? null : (
          <div className={style.home}>
            <Link to={"/register"}>Register</Link>
          </div>
        )}
        <div className={style.inner1}></div>
      </div>
    </div>
  );
};

export default Menu;
