import React from 'react'
import './main.css'
import SideMenu from './SideMeny/SideMenu'
import Header from './Header/Header'
import { BrowserRouter, Route } from "react-router-dom"
import AllDays from './Content/All/AllDays'
import Today from './Content/Today/Today'
import News from "./Content/News/News";
import Login from './Header/authorization/Login'
import Registration from "./Header/authorization/Registration";
import Posts from './Content/Posts/Posts'
import Menu from './Menu/Menu'
import { useState } from 'react'


const Main = () => {
 const [menuActive, setMenuActive] = useState(false)

    return (
      <div className="wrapper">
        
        <BrowserRouter>
          <Header menuActive={menuActive} setMenuActive={setMenuActive} />
          <SideMenu />
          <Menu menuActive={menuActive} setMenuActive={setMenuActive}/>
          <div className="content">
            <Route path="/login" render={() => <Login />} />
            <Route path="/registration" render={() => <Registration />} />
            <Route path="/home" render={() => <AllDays />} />
            <Route path="/today" render={() => <Today />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/posts" render={() => <Posts />} />
          </div>
        </BrowserRouter>
      </div>
    );
}

export default  Main;