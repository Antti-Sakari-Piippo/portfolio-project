import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../images/design.svg";
import intelligence from "../images/intelligence.svg";
import gamedev from "../images/game-dev.svg";

function AboutPage() {
	return (
		<div className="AboutPage">
			<Tittle title={"About Me"} span={"About Me"} />
			<ImageSection />
			<Tittle title={"My Skills"} span={"My Skills"} />
			<div className="skillsContainer">
				<SkillsSection skill={"React Js"} progress={"65%"} width={"65%"} />
				<SkillsSection skill={"WordPress"} progress={"55%"} width={"55%"} />
				<SkillsSection skill={"CSS and SCSS"} progress={"70%"} width={"70%"} />
				<SkillsSection skill={"MySQL"} progress={"50%"} width={"50%"} />
				<SkillsSection skill={"Data-analysis"} progress={"40%"} width={"40%"} />
			</div>

			<Tittle title={"Services"} span={"Services"} />
			<div className="services-container">
				<ServicesSection
					image={design}
					title={"Web design"}
					text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
				/>
				<ServicesSection
					image={intelligence}
					title={"Artificial Intelligence"}
					text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
				/>
				<ServicesSection
					image={gamedev}
					title={"Game Development"}
					text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
				/>
			</div>
		</div>
	);
}

export default AboutPage;
