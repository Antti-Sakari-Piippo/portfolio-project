import port1 from "../images/portImages/port1.jpg";
import port3 from "../images/portImages/port3.jpg";
import port4 from "../images/portImages/port4.jpg";
import port5 from "../images/portImages/port5.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import netlifyIcon from "@iconify-icons/logos/netlify";

const portfolios = [
	{
		id: 1,
		category: "React Js",
		link1: "https://github.com/Antti-Sakari-Piippo/weather-app-react-hooks",
		link2: "https://frosty-hopper-57a7b9.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port3,
		title: "Weather App"
	},
	{
		id: 2,
		category: "CSS",
		link1: "https://github.com/Antti-Sakari-Piippo/CSS-SHAPES",
		link2: "https://peaceful-turing-1c48b2.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port5,
		title: "HTML and SCSS shapes"
	},
	{
		id: 3,
		category: "React Js",
		link1: "https://github.com/Antti-Sakari-Piippo/crypto-2",
		link2: "https://practical-colden-9a6133.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port4,
		title: "Cryptomarketcap"
	},
	{
		id: 4,
		category: "React Js",
		link1: "https://github.com/Antti-Sakari-Piippo/portfolio-project",
		link2: "https://modest-noyce-6b7122.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port4,
		title: "Portfolio App"
	},
	{
		id: 5,
		category: "Python",
		link1: "https://github.com/Antti-Sakari-Piippo",
		link2: "https://github.com/Antti-Sakari-Piippo",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Python (COMING SOON)"
	},
	{
		id: 6,
		category: "NodeJS",
		link1: "https://github.com/Antti-Sakari-Piippo/bank-nodejs/blob/master/bank.js",
		link2: "",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Bank"
	},
	{
		id: 7,
		category: "Power BI",
		link1: "",
		link2: "",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Tieliikenneonnettomuudet (Coming Soon)"
	},
	{
		id: 8,
		category: "React Js",
		link1: "https://github.com/Antti-Sakari-Piippo/budged-calculator",
		link2: "https://elastic-wright-978438.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Budged Calculator"
	}
];

export default portfolios;
