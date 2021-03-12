import "./App.scss";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { Switch, Route, useParams } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import { useState } from "react";
import Particles from "react-particles-js";
import Blog from "./Components/Blog";

function App() {
  const { id } = useParams();
  const [toggle, setToggle] = useState(false);

  const navToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <div className={`Navbar-holder ${toggle ? "nav-toggle" : ""}`}>
        <Navbar navToggle={navToggle} />
      </div>

      <div className="nav-btn" onClick={navToggle}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Particles
                className="particles-canvas"
                params={{
                  polygon: {
                    number: {
                      value: 30,
                      density: {
                        enable: true,
                        value_area: 400,
                      },
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 10,
                        color: "#E87A00",
                      },
                    },
                  },
                }}
              ></Particles>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfoliosPage />
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/blogs/:id" component={Blog} />
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
