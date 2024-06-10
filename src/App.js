import "./App.scss";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { Switch as PageSwitching, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import { useEffect, useState, useRef } from "react";
import Particles from "react-particles-js";
import { Blog } from "./Pages/Blog";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";

const App = () => {
	const [toggle, setToggle] = useState(false);
	const [theme, setTheme] = useState("dark-theme");
	const [checked, setChecked] = useState(false);

	const navbarRef = useRef();

	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme]);

	const themeToggler = () => {
		if (theme === "light-theme") {
			setTheme("dark-theme");
			setChecked(false);
		} else {
			setTheme("light-theme");
			setChecked(true);
		}
	};

	const navToggle = () => {
		setToggle(!toggle);
	};

	const handleClickOutside = (event) => {
		if (navbarRef.current && !navbarRef.current.contains(event.target)) {
			setToggle(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className="App">
			<div
				className={`Navbar-holder ${toggle ? "nav-toggle" : ""}`}
				ref={navbarRef}
			>
				<Navbar navToggle={navToggle} />
			</div>
			<div className="nav-btn" onClick={navToggle}>
				<div className="lines-1" />
				<div className="lines-2" />
				<div className="lines-3" />
				<div className="theme">
					<div className="light-dark-mode">
						<div className="left-content">
							<Brightness4Icon />
						</div>
						<div className="right-content">
							<Switch
								value=""
								checked={checked}
								inputProps={{ "aria-label": "" }}
								size="medium"
								onClick={themeToggler}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="main-content">
				<div className="content">
					<PageSwitching>
						<Route path="/" exact>
							<Particles
								className="particles-canvas"
								params={{
									particles: {
										number: {
											value: 3,
											density: {
												enable: true,
												value_area: 1000
											}
										},
										shape: {
											type: "circle",
											stroke: {
												width: 1000,
												color: "#E87A00"
											}
										}
									}
								}}
							/>
							<HomePage />
						</Route>
						<Route path="/about" exact>
							<AboutPage />
						</Route>
						<Route path="/portfolios" exact>
							<PortfoliosPage />
						</Route>
						<Route path="/blogs" exact>
							<BlogsPage />
						</Route>
					</PageSwitching>
					<PageSwitching>
						<Route exact path="/blogs/:slug">
							<Blog />
						</Route>
					</PageSwitching>
					<PageSwitching>
						<Route path="/contact" exact>
							<ContactPage />
						</Route>
					</PageSwitching>
				</div>
			</div>
		</div>
	);
};

export default App;
