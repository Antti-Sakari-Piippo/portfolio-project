import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";

function AboutPage() {
	return (
		<div className="AboutPage">
			<Tittle title={"About Me"} span={"About Me"} />
			<ImageSection />
			<Tittle title={"My Skills"} span={"My Skills"} />
			<div className="skillsContainer">
				<SkillsSection skill={"React Js"} progress={"65%"} width={"65%"} />
				<SkillsSection skill={"Figma and web design"} progress={"70%"} width={"70%"} />
				<SkillsSection skill={"WordPress"} progress={"70%"} width={"70%"} />
				<SkillsSection skill={"CSS and SCSS"} progress={"85%"} width={"85%"} />
				<SkillsSection skill={"MySQL"} progress={"65%"} width={"65%"} />
				<SkillsSection skill={"Data-analysis"} progress={"40%"} width={"40%"} />
			</div>
		</div>
	);
}

export default AboutPage;
