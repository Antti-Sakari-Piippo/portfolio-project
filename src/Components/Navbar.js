import profile from "../images/cv/cv_profil.png";
import { NavLink } from "react-router-dom";

function Navbar({ navToggle }) {
	return (
		<div className="Navbar">
			<nav className="nav">
				<div className="profile">
					<img src={profile} alt="profile" />
				</div>
				<i className="fas fa-angle-left" onClick={navToggle} />
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
						<NavLink to="/education" exact>
							Education/Work
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/contact" exact>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
