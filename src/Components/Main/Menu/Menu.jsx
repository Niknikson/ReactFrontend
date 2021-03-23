import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = ({ menuActive, setMenuActive}) => {
    const header = 'Header'
    const items = [{ id: 1, nav: "/home", value: "Home", icon: "home" }, { id:2,nav: "/today", value: "Today", icon: "event_available"},
        { id: 3, nav: "/news", value: "News", icon: "free_breakfast" }, { id:4,nav: "/posts", value: "Posts", icon: "local_activity" },  ]
    
  return (
      <div className={menuActive ? "menu active"  : "menu" }>
          <div className="blur" onClick={() => setMenuActive(false)} />
          <div
            //   onClick={e => e.stopPropagation()}
              className="menu__content" >
              <div className="menu__contentHeader">
                  <div className="menu__header">{header}</div>
          <div > <i className="material-icons menu_icons" onClick={() => setMenuActive(false)}>close</i></div>
              </div>
        <ul>
            {items.map(item =>
            <li key={item.id}>
                <NavLink className='menu_list' to={item.nav}>
                        {item.value}
                    </NavLink>
                <div> <i className="material-icons menu_icons">{item.icon}</i></div>
            </li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
