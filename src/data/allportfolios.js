import port1 from "../images/portImages/port1.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import netlifyIcon from "@iconify-icons/logos/netlify";

const portfolios = [
	{
		id: 1,
		category: "React Js",
		link1: "https://github.com/Antti-Sakari-Piippo/redux-shopping",
		link2: "https://eager-jennings-c0c61f.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Shopping cart [Redux]"
	},
	{
		id: 2,
		category: "React Js",
		link1: "https://github.com/Antti-Sakari-Piippo/portfolio-project",
		link2: "", //https://modest-noyce-6b7122.netlify.app
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Portfolio App"
	},
	{
		id: 3,
		category: "React Js",
		link1: "https://github.com/Antti-Sakari-Piippo/weather-app-react-hooks",
		link2: "https://frosty-hopper-57a7b9.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Weather App"
	},
	{
		id: 4,
		category: "vanilla",
		link1: "https://github.com/Antti-Sakari-Piippo/CSS-SHAPES",
		link2: "https://peaceful-turing-1c48b2.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "HTML and SCSS shapes"
	},
	{
		id: 5,
		category: "React Js",
		link1: "https://github.com/Antti-Sakari-Piippo/crypto-2",
		link2: "https://practical-colden-9a6133.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Crypto Market Cap"
	},
	{
		id: 6,
		category: "Python",
		link1: "",
		link2: "",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Python (COMING SOON)"
	},
	{
		id: 7,
		category: "Node JS",
		link1: "https://github.com/Antti-Sakari-Piippo/bank-nodejs/blob/master/bank.js",
		link2: "",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Bank"
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
	},
	{
		id: 9,
		category: "Power BI",
		link1: "",
		link2: "",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Tieliikenneonnettomuudet (COMING SOON)"
	},
	{
		id: 10,
		category: "vanilla",
		link1: "https://github.com/Antti-Sakari-Piippo/customisable-website/tree/master",
		link2: "https://gallant-nobel-66606d.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Customizable website"
	}
];

export default portfolios;
