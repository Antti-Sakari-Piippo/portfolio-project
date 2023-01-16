import port1 from "../images/portImages/port1.jpg";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import netlifyIcon from "@iconify-icons/logos/netlify";
import figmaIcon from "@iconify-icons/logos/figma";

// projectImages
import theRaven from "../images/projectImages/theRaven.PNG";
import basic from "../images/projectImages/basic.PNG";
import dune from "../images/projectImages/dune.PNG";
import HPLovecraft from "../images/projectImages/HPLovecraft.PNG";
import nightly from "../images/projectImages/nightly.PNG";
import ocianica from "../images/projectImages/ocianica.PNG";
import woods from "../images/projectImages/woods.PNG";
import JackLondon from "../images/projectImages/JackLondon.PNG";
import tubeAudio from "../images/projectImages/tubeAudio.PNG";
import Tolkien from "../images/projectImages/Tolkien.PNG";
import Mountain from "../images/projectImages/Mountain.PNG";
import Aniva from "../images/projectImages/Aniva.PNG";
import choco from "../images/projectImages/choco.PNG";
import poeJS from "../images/projectImages/poeJS.png";

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
	},
	{
		id: 11,
		category: "figma",
		link1:
			"https://www.figma.com/proto/uNcdIc6EmkzxCmHGajkiE5/Poe?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: theRaven,
		title: "The Raven by Edgar Allan Poe"
	},
	{
		id: 12,
		category: "figma",
		link1:
			"https://www.figma.com/proto/JShSH32GowcQ3EoMfwxMXF/H.P.-Lovecraft?node-id=62%3A2&scaling=min-zoom&page-id=0%3A1",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: HPLovecraft,
		title: "H.P Lovecraft"
	},
	{
		id: 13,
		category: "figma",
		link1: "https://www.figma.com/proto/CNFs0ID43r9X1sWikq8wgN/Dune?node-id=3%3A3&scaling=min-zoom&page-id=0%3A1",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: dune,
		title: "Dune"
	},
	{
		id: 14,
		category: "figma",
		link1:
			"https://www.figma.com/proto/qVD3PhXnSjPJbBgowzruMv/woody?node-id=22%3A2&scaling=scale-down&page-id=0%3A1",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: woods,
		title: "Woods"
	},
	{
		id: 15,
		category: "figma",
		link1:
			"https://www.figma.com/proto/VJBAgTuePEnPHY07o4U1TH/Nighty?node-id=25%3A242&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=25%3A192",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: nightly,
		title: "Nighty"
	},
	{
		id: 16,
		category: "figma",
		link1:
			"https://www.figma.com/proto/JKFtd6AaNfzs7HVkuuDd20/Water?node-id=2%3A5&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A5",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: ocianica,
		title: "Ocianica"
	},
	{
		id: 17,
		category: "figma",
		link1:
			"https://www.figma.com/proto/bxqP5WKrxEUvvfoUMZD6lL/MyFIrstDesign?node-id=0%3A3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=0%3A3",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: basic,
		title: "Basic"
	},
	{
		id: 18,
		category: "figma",
		link1:
			"https://www.figma.com/proto/D2IcgKmwkwIrHvHgKnUtLY/Jack-London?scaling=min-zoom&page-id=0%3A1&node-id=30%3A292&starting-point-node-id=30%3A292",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: JackLondon,
		title: "Jack London"
	},
	{
		id: 19,
		category: "figma",
		link1:
			"https://www.figma.com/proto/RF9Yz83oheuctl8eLZSFaj/Tubes-and-amps?page-id=0%3A1&node-id=2%3A2&viewport=562%2C402%2C0.55&scaling=min-zoom",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: tubeAudio,
		title: "Tube Audio"
	},
	{
		id: 20,
		category: "figma",
		link1: "https://www.figma.com/proto/6wPX856ruFiMvkz6kGoqaO/Tolkien?page-id=0%3A1&node-id=26%3A3",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: Tolkien,
		title: "Tolkien"
	},
	{
		id: 21,
		category: "figma",
		link1:
			"https://www.figma.com/proto/gKRQUzOYWIoMQx3j9V8u0A/Mountain-Expedition?page-id=0%3A1&node-id=1%3A2&viewport=450%2C91%2C0.1&scaling=min-zoom",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: Mountain,
		title: "Travel website"
	},
	{
		id: 22,
		category: "figma",
		link1:
			"https://www.figma.com/proto/ONnqKQkx4zmETBfWhzy2io/Aniva2?page-id=0%3A1&node-id=80%3A190&viewport=1645%2C2746%2C0.57&scaling=min-zoom",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: Aniva,
		title: "Aniva"
	},
	{
		id: 23,
		category: "figma",
		link1:
			"https://www.figma.com/proto/kuYhStcYssaahQEDYRJVAm/chocolate?page-id=0%3A1&node-id=1%3A2&viewport=883%2C536%2C0.35&scaling=min-zoom&starting-point-node-id=1%3A2",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: choco,
		title: "Chocolate store"
	},
	{
		id: 24,
		category: "vanilla",
		link1: "https://github.com/Antti-Sakari-Piippo/poe",
		link2: "https://sparkling-gnome-561e0f.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: poeJS,
		title: "The Raven by Edgar Allan Poe"
	},
	{
		id: 25,
		category: "vanilla",
		link1: "https://github.com/Antti-Sakari-Piippo/MountainExpeditionJS",
		link2: "https://shiny-puffpuff-b76fea.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: Mountain,
		title: "Mountain expedition travel site"
	},
	{
		id: 26,
		category: "vanilla",
		link1: "https://github.com/Antti-Sakari-Piippo/Tolkien",
		link2: "https://stellular-medovik-34be58.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: Tolkien,
		title: "J.R.R Tolkien site"
	},
];

export default portfolios;
