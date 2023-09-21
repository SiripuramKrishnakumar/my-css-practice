import { Fragment } from "react";
import './Home.css';
import { Link, Outlet } from "react-router-dom";
import box1 from '../images/customer-1.jpeg';
import box2 from '../images/customer-2.jpeg';
import box3 from '../images/news-events-img-6.jpeg';

const Home = () => {

    return (
      <Fragment>
        <div className="home-grid-container">
          <div className="home-header">
            <h1>Grid - Header</h1>
          </div>

          <div className="home-sidebar">
            <nav className="home-navbar">
              <h1> Grid - Sidebar</h1>
              <br />
              <ul className="home-nav-list">
                <li>
                  <Link to="/home/room1">
                    <h4> Room 1 </h4>
                  </Link>
                </li>
                <li>
                  <Link to="/home/room2">
                    <h4> Room 2 </h4>
                  </Link>
                </li>
                <li>
                  <Link to="/home/room3">
                    <h4> Room 3 </h4>
                  </Link>
                </li>
                <li>
                  <Link to="/home/room4">
                    <h4> Room 4 </h4>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="home-main-content">
            <h1>Grid - Main Content</h1>
            <div>
              <p> Please select Room</p>
              <Outlet />
            </div>
          </div>
         
          <div className="home-box-1">
            <h1>Grid - box 1</h1>
            <img
              src={box1}
              alt="box1"
              style={{width: '100%', height:'100%', position:'absolute'}}
            />
          </div>

          <div className="home-box-2">
            <h1>Grid - box 2</h1>
            <img
              src={box2}
              alt="box2"
              style={{width: '100%', height:'100%', position:'absolute'}}
            />
          </div>

          <div className="home-box-3">
            <h1>Grid - box 3</h1>
            <img
              src={box3}
              alt="box3"
              style={{width: '100%', height:'100%', position:'absolute'}}
            />
          </div>

          <footer className="home-footer">
            <h3>Grid - Footer</h3>
          </footer>
        </div>
      </Fragment>
    );
}

export default Home;