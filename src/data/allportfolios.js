import port1 from "../images/portImages/port1.jpg";
import port2 from "../images/portImages/port2.jpg";
import port3 from "../images/portImages/port3.jpg";
import port4 from "../images/portImages/port4.jpg";
import port5 from "../images/portImages/port5.jpg";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const portfolios = [
  {
    id: 1,
    category: "Python",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    icon2: <FontAwesomeIcon icon={faYoutube} />,
    image: port1,
    title: "Python Web Project",
  },
  {
    id: 2,
    category: "Javascript",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    icon2: <FontAwesomeIcon icon={faYoutube} />,
    image: port2,
    title: "Vanilla Javascript Website",
  },
  {
    id: 3,
    category: "React Js",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    icon2: <FontAwesomeIcon icon={faYoutube} />,
    image: port3,
    title: "React project",
  },
  {
    id: 4,
    category: "CSS",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    icon2: <FontAwesomeIcon icon={faYoutube} />,
    image: port4,
    title: "Vanilla HTML and CSS project",
  },
  {
    id: 5,
    category: "Test Port",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: <FontAwesomeIcon icon={faGithub} />,
    icon2: <FontAwesomeIcon icon={faYoutube} />,
    image: port5,
    title: "Test Port",
  },
];

export default portfolios;
