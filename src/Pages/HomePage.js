import Typed from "react-typed";
import { faFacebook, faTwitter, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere, numquam vitae placeat
					consequatur corrupti officia quibusdam. Blanditiis doloremque nemo ex facilis neque. A sint ipsam
					earum nemo omnis et.
				</p>
				<div className="icons">
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faGithub} className="icon github" />
					</Link>
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faYoutube} className="icon youtube" />
					</Link>
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faTwitter} className="icon twitter" />
					</Link>
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faFacebook} className="icon facebook" />
					</Link>
				</div>
			</header>
		</div>
	);
}

export default HomePage;
