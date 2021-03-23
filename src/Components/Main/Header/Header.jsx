import React from "react";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import Input from "./input/Input";

const MainHeader = ({ menuActive, setMenuActive}) => {

  return (
    <div className={s.contentHeader}>
      <div>
        <div className={s.burgerLogo}>
          <div className={s.burgerBtn}
            onClick={() => setMenuActive(!menuActive)}>
            <span />
          </div>
          <div>
            <NavLink to='/home' className={s.logo}>inTime</NavLink>
          </div>
        </div>
      </div>
        
        <div className={s.add}>
         <Input/>
        </div>
        <div className={s.login}>
        <div className={s.loginNav}><NavLink style={{ color: 'black' }} to='/login'>Login</NavLink></div>
        <div> <NavLink className={s.registrationLogo} to='/registration'>Registration</NavLink></div>
        </div>
      </div>
      
      
  );
};

export default MainHeader;
