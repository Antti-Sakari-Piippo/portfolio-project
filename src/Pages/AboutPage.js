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
        <SkillsSection skill={"Javascript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"React Js"} progress={"65%"} width={"65%"} />
        <SkillsSection skill={"CSS and SCSS"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Unity"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"SQL"} progress={"60%"} width={"60%"} />
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
