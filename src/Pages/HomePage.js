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
				<p className="h-sub-text">I'm an enthusiastic and dedicated Front-End Web Developer with a strong foundation in HTML, CSS, and JavaScript. I have experience with WordPress, React.js, and Next.js. My passion for web development and design, along with hands-on experience from personal projects, drives my continuous growth in the field.</p>
				<p className="h-sub-text">My expertise extends to data analysis, with proficiency in tools such as Power BI, Google Analytics, and Python libraries like Matplotlib, NumPy, and Seaborn. I have leveraged these tools to create interactive dashboards, perform website traffic analysis, and visualize complex datasets. These skills enable me to derive actionable insights, optimize web performance, and enhance user experience.</p>
				<p className="h-sub-text">In addition to my experience in tech, I work as a lumberjack and have performed accounting tasks for a company using FabricAi and Procountor. I enjoy working both collaboratively and independently.</p>
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
