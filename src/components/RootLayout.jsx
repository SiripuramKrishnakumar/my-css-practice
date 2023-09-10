import { Fragment } from "react";
import MenuNavbar from "./MenuNavbar";
import { Outlet } from "react-router-dom";
import './RootLayout.css';

const RootLayout = () => {
    return (
      <div className="root">
        <MenuNavbar />
        <button
          id="navCloseBtn"
          style={{ display: "none" }}
          onClick={() => {
            document.getElementById("click").checked = true;
          }}
        ></button>
        <label htmlFor="navCloseBtn">
          <div className="layout">
            <Outlet />
          </div>
        </label>
      </div>
    );
}

export default RootLayout;