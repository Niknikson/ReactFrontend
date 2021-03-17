import React from "react";
import { NavLink } from "react-router-dom";
import s from "./sideMenu.module.css";

const SideMenu = (props) => {

  return (
    <div className={s.sideMenu}>
      <div>
        <NavLink style={{ color: "black" }} to="/home">
          All Days
        </NavLink>
      </div>
      <div>
        <NavLink style={{ color: "black" }} to="/today">
          Today
        </NavLink>
      </div>
      <div>
        <NavLink style={{ color: "black" }} to="/news">
          News
        </NavLink>
      </div>
      <div>
        <NavLink style={{ color: "black" }} to="/posts">
          Posts
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
