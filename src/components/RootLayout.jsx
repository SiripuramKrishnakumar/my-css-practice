import { Fragment } from "react";
import MenuNavbar from "./MenuNavbar";
import { Outlet } from "react-router-dom";
import './RootLayout.css';

const RootLayout = () => {
    return (
      <div className="root">
        <MenuNavbar />
        <input type="checkbox" className="nav-checkbox" id="nav-click" />
          <div className="layout">
            <Outlet />
          </div>
      </div>
    );
}

export default RootLayout;