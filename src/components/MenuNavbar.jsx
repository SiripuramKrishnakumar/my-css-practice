import { Fragment } from "react";
import { Form, Link } from "react-router-dom";
import './MenuNavbar.css';

const MenuNavbar = () => {
    return (
      <Fragment>
        <div className="navbar">
          <input type="checkbox" className="nav-checkbox" id="click" />
          <div className="sidebar">
            <label htmlFor="click">
              <div className="menu-icon">
                <div className="line line-1"> </div>
                <div className="line line-2"> </div>
                <div className="line line-3"></div>
              </div>
            </label>
            <ul className="social-icons-list">
              <li>
                <Link to="/" className="social-link">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/" className="social-link">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/" className="social-link">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="/" className="social-link">
                  LinkedIn
                </Link>
              </li>
            </ul>
            <div className="year">
              <p>2023</p>
            </div>
          </div>

          <nav className="navigation">
            <div className="navigation-header">
              <h1 className="navigation-heading">Grand Hotel</h1>
              <button className="close-button"
                onClick={() => {
                  document.getElementById("click").checked = true;
                }}
              >
                X
              </button>
              <Form className="nav-form">
                <input
                  type="text"
                  className="navigation-search-input"
                  placeholder="Search..."
                />
                <button className="navigation-search-button">Search</button>
              </Form>
            </div>
            <ul className="navigation-list">
              <li>
                <Link to="/home" className="social-link">
                  <h2>Home</h2>
                </Link>
              </li>
              <li>
                <Link to="/" className="social-link">
                  <h2>AboutUs</h2>
                </Link>
              </li>
              <li>
                <Link to="/" className="social-link">
                  <h2>Services</h2>
                </Link>
              </li>
              <li>
                <Link to="/" className="social-link">
                  <h2>Customers</h2>
                </Link>
              </li>
              <li className="nav-last-item">
                <p>&copy; 2023 All rights reserved.</p>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    );
}

export default MenuNavbar;