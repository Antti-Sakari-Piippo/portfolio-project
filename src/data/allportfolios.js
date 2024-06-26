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
import woodsLarge from "../images/projectImages/woodsLarge.png";
import pixels from "../images/projectImages/pixels.png";
import steam from "../images/projectImages/steam.png";
import modernHouses from "../images/projectImages/modern_houses.png";

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
		category: "vanilla JS",
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
		id: 10,
		category: "vanilla JS",
		link1: "https://github.com/Antti-Sakari-Piippo/customisable-website/tree/master",
		link2: "https://gallant-nobel-66606d.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: port1,
		title: "Customizable website"
	},
	// {
	// 	id: 11,
	// 	category: "figma",
	// 	link1:
	// 		"https://www.figma.com/proto/uNcdIc6EmkzxCmHGajkiE5/Poe?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2",
	// 	icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
	// 	image: theRaven,
	// 	title: "The Raven by Edgar Allan Poe [Figma]"
	// },
	{
		id: 12,
		category: "figma",
		link1:
			"https://www.figma.com/proto/JShSH32GowcQ3EoMfwxMXF/H.P.-Lovecraft?node-id=62%3A2&scaling=min-zoom&page-id=0%3A1",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: HPLovecraft,
		title: "H.P Lovecraft [Figma]"
	},
	{
		id: 13,
		category: "figma",
		link1: "https://www.figma.com/proto/CNFs0ID43r9X1sWikq8wgN/Dune?node-id=3%3A3&scaling=min-zoom&page-id=0%3A1",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: dune,
		title: "Dune [Figma]"
	},
	{
		id: 14,
		category: "figma",
		link1:
			"https://www.figma.com/proto/qVD3PhXnSjPJbBgowzruMv/woody?node-id=22%3A2&scaling=scale-down&page-id=0%3A1",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: woods,
		title: "Woods [Figma]"
	},
	{
		id: 15,
		category: "figma",
		link1:
			"https://www.figma.com/proto/VJBAgTuePEnPHY07o4U1TH/Nighty?node-id=25%3A242&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=25%3A192",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: nightly,
		title: "Nighty [Figma]"
	},
	{
		id: 16,
		category: "figma",
		link1:
			"https://www.figma.com/proto/JKFtd6AaNfzs7HVkuuDd20/Water?node-id=2%3A5&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A5",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: ocianica,
		title: "Ocianica [Figma]"
	},
	{
		id: 17,
		category: "figma",
		link1:
			"https://www.figma.com/proto/bxqP5WKrxEUvvfoUMZD6lL/MyFIrstDesign?node-id=0%3A3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=0%3A3",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: basic,
		title: "Basic web design [Figma]"
	},
	{
		id: 18,
		category: "figma",
		link1:
			"https://www.figma.com/proto/D2IcgKmwkwIrHvHgKnUtLY/Jack-London?scaling=min-zoom&page-id=0%3A1&node-id=30%3A292&starting-point-node-id=30%3A292",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: JackLondon,
		title: "Jack London [Figma]"
	},
	{
		id: 19,
		category: "figma",
		link1:
			"https://www.figma.com/proto/RF9Yz83oheuctl8eLZSFaj/Tubes-and-amps?page-id=0%3A1&node-id=2%3A2&viewport=562%2C402%2C0.55&scaling=min-zoom",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: tubeAudio,
		title: "Tube Audio [Figma]"
	},
	{
		id: 20,
		category: "figma",
		link1: "https://www.figma.com/proto/6wPX856ruFiMvkz6kGoqaO/Tolkien?page-id=0%3A1&node-id=26%3A3",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: Tolkien,
		title: "Tolkien [Figma]"
	},
	{
		id: 21,
		category: "figma",
		link1:
			"https://www.figma.com/proto/gKRQUzOYWIoMQx3j9V8u0A/Mountain-Expedition?page-id=0%3A1&node-id=1%3A2&viewport=450%2C91%2C0.1&scaling=min-zoom",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: Mountain,
		title: "Travel website [Figma]"
	},
	{
		id: 22,
		category: "figma",
		link1:
			"https://www.figma.com/proto/ONnqKQkx4zmETBfWhzy2io/Aniva2?page-id=0%3A1&node-id=80%3A190&viewport=1645%2C2746%2C0.57&scaling=min-zoom",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: Aniva,
		title: "Aniva [Figma]"
	},
	{
		id: 23,
		category: "figma",
		link1:
			"https://www.figma.com/proto/kuYhStcYssaahQEDYRJVAm/chocolate?page-id=0%3A1&node-id=1%3A2&viewport=883%2C536%2C0.35&scaling=min-zoom&starting-point-node-id=1%3A2",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: choco,
		title: "Chocolate store [Figma]"
	},
	{
		id: 24,
		category: "vanilla JS",
		link1: "https://github.com/Antti-Sakari-Piippo/poe",
		link2: "https://sparkling-gnome-561e0f.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: poeJS,
		title: "The Raven by Edgar Allan Poe website"
	},
	{
		id: 25,
		category: "vanilla JS",
		link1: "https://github.com/Antti-Sakari-Piippo/ocianica",
		link2: "https://dashing-palmier-0f012a.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: ocianica,
		title: "Ocianica travel webdsite"
	},
	{
		id: 26,
		category: "vanilla JS",
		link1: "https://github.com/Antti-Sakari-Piippo/MountainExpeditionJS",
		link2: "https://shiny-puffpuff-b76fea.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: Mountain,
		title: "Mountain expedition travel website"
	},
	{
		id: 27,
		category: "vanilla JS",
		link1: "https://github.com/Antti-Sakari-Piippo/Tolkien",
		link2: "https://stellular-medovik-34be58.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: Tolkien,
		title: "J.R.R Tolkien website"
	},
	{
		id: 28,
		category: "vanilla JS",
		link1: "https://github.com/Antti-Sakari-Piippo/Woods",
		link2: "https://playful-basbousa-842897.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: woodsLarge,
		title: "Woods website"
	},
	// {
	// 	id: 29,
	// 	category: "vanilla JS",
	// 	link1: "https://github.com/Antti-Sakari-Piippo/AnivaJS",
	// 	link2: "https://kaleidoscopic-melomakarona-5d0426.netlify.app/",
	// 	icon1: <FontAwesomeIcon icon={faGithub} />,
	// 	icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
	// 	image: Aniva,
	// 	title: "Aniva lighthouse site"
	// },
	{
		id: 30,
		category: "NextJs",
		link1: "https://github.com/Antti-Sakari-Piippo/woods-nextjs",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		image: woodsLarge,
		title: "NextJs Woods website"
	},
	{
		id: 31,
		category: "vanilla JS",
		link1: "https://github.com/Antti-Sakari-Piippo/chocolateShop",
		link2: "https://radiant-mermaid-6bc52e.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: choco,
		title: "Chocolate store website"
	},
	{
		id: 32,
		category: "vanilla JS",
		link1: "https://github.com/Antti-Sakari-Piippo/H.P.Lovecraft",
		link2: "https://marvelous-melomakarona-34f1fa.netlify.app",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: HPLovecraft,
		title: "H.P Lovecraft website"
	},
	{
		id: 33,
		category: "vanilla JS",
		link1: "https://github.com/Antti-Sakari-Piippo/Steam-redesign",
		link2: "https://deft-queijadas-fd7230.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: steam,
		title: "Steam mobile redesign"
	},
	{
		id: 34,
		category: "figma",
		link1:
			"https://www.figma.com/proto/zD7Ysy3znQML2bZXxx8jex/AI?page-id=0%3A1&node-id=1-3&scaling=min-zoom&mode=design&t=1X7YZQFNdCM8Qn72-1",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: pixels,
		title: "Pixels AI [Figma]"
	},
	{
		id: 35,
		category: "vanilla JS",
		link1: "https://github.com/Antti-Sakari-Piippo/PIXELS-AI",
		link2: "https://dancing-stroopwafel-2ecaa8.netlify.app/",
		icon1: <FontAwesomeIcon icon={faGithub} />,
		icon2: <Icon icon={netlifyIcon} width="80px" height="80px" />,
		image: pixels,
		title: "Pixels AI website"
	},
	{
		id: 36,
		category: "figma",
		link1:
			"https://www.figma.com/proto/Umu6hp5FJfAANwX2iKq24f/Modern-design?page-id=0%3A1&node-id=42-50&starting-point-node-id=42%3A50&mode=design&t=NuFOa3FkGwxvp04G-1",
		icon1: <Icon icon={figmaIcon} width="80px" height="80px" />,
		image: modernHouses,
		title: "Modern Houses [Figma]"
	},
];

export default portfolios;
