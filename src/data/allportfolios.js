import port1 from "../images/portImages/port1.jpg";
import port2 from "../images/portImages/port2.jpg";
import port3 from "../images/portImages/port3.jpg";
import port4 from "../images/portImages/port4.jpg";
import port5 from "../images/portImages/port5.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const portfolios = [
	{
		id: 1,
		category: "React Js",
		link2: "https://github.com/Antti-Sakari-Piippo",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		image: port3,
		title: "React project"
	},
	{
		id: 2,
		category: "NodeJS",
		link2: "https://github.com/Antti-Sakari-Piippo",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		image: port5,
		title: "NodeJS"
	},
	{
		id: 3,
		category: "CSS",
		link2: "https://github.com/Antti-Sakari-Piippo",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		image: port4,
		title: "Vanilla HTML and CSS project"
	},
	{
		id: 4,
		category: "Python",
		link2: "https://github.com/Antti-Sakari-Piippo",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		image: port1,
		title: "Python Web Project (COMING SOON)"
	}
];

export default portfolios;
