import Typed from "react-typed";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
	return (
		<div className="HomePage">
			<header className="hero">
				<h1 className="hero-text">
					Hi, I am&nbsp;
					<Typed
						className="typed-text"
						strings={["Antti Piippo", "a web developer", "a web designer", "a data-analysts"]}
						typeSpeed={40}
						backSpeed={60}
						loop
					/>
				</h1>
				<p className="h-sub-text">I'm enthusiastic ja dedicated Front-End Web Developer with a strong foundation in HTML, CSS, and JavaScript. I also have knowledge about WordPress, React.js and Next.js.</p>
				<p className="h-sub-text">My expertize extends to data-analysis, with proficiency in tools such as Power BI, Google Analytics and Python libraries like Matplotlib, Numby, and Seaborn.</p>
				<p className="h-sub-text">My passion for web development and design, coupled with hands-on experience from personal projects, drives my continuos growth in the field. Asside from my experience in tech, I am a lumberjack and I have done accounting for a company using FabricAi and Procounter. I like working in a group and independently.</p>
				<div className="icons">
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/Antti-Sakari-Piippo"
						className="icon-holder"
					>
						<FontAwesomeIcon icon={faGithub} className="icon github" />
					</a>
					{/* <a
						rel="noopener noreferrer"
						target="_blank"
						href="https://linkedin.com/in/piippo-antti"
						className="icon-holder"
					>
						<FontAwesomeIcon icon={faLinkedinIn} className="icon linkedIn" />
					</a> */}
				</div>
			</header>
		</div>
	);
}

export default HomePage;
