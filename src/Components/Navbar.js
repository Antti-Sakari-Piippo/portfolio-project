import avatar from "../images/blank-profile-picture.webp";
import { NavLink } from "react-router-dom";

function Navbar({ navToggle }) {
  return (
    <div className="Navbar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
        <i className="fas fa-angle-left" onClick={navToggle}></i>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact>
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact>
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact>
              Contact
            </NavLink>
          </li>
        </ul>

        <footer className="footer">
          <p>@2021 Lorem Ipsum</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
