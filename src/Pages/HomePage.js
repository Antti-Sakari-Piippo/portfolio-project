import Typed from "react-typed";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
	return (
		<div className="HomePage">
			<header className="hero">
				<h1 className="hero-text">
					Hi, I am&nbsp;
					<Typed
						className="typed-text"
						strings={[ "Antti Piippo", "a web developer", "a data-analysts" ]}
						typeSpeed={40}
						backSpeed={60}
						loop
					/>
				</h1>
				<p className="h-sub-text">
					I'm currently looking for job opportunities in web-development and data-analysis.
				</p>
				<div className="icons">
					<a rel="noopener noreferrer" href="https://github.com/Antti-Sakari-Piippo" className="icon-holder">
						<FontAwesomeIcon icon={faGithub} className="icon github" />
					</a>
					<a rel="noopener noreferrer" href="https://linkedin.com/in/piippo-antti" className="icon-holder">
						<FontAwesomeIcon icon={faLinkedinIn} className="icon linkedIn" />
					</a>
				</div>
			</header>
		</div>
	);
}

export default HomePage;
