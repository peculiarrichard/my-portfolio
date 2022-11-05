import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Portfolio from "./components/Portfolio";
import ProjectDetails from "./components/ProjectDetails";
import "./index.css";
import logo from "./images/logo.png";
import { NavbarContainer, NavbarLinkContainer, NavbarLink } from "./Style";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const App = () => {
  const [active, setActive] = React.useState(false);
  const showMobileMenu = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <>
      <ErrorBoundary>
        <NavbarContainer className="nav-bar">
          <div className="mobile">
            <Link to="/">
              <img src={logo} alt="" className="logo"></img>
            </Link>
            <button className="nav-toggle" onClick={showMobileMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <NavbarLinkContainer className={active ? "show-menu" : ""}>
            <NavbarLink to="/">home</NavbarLink>
            <NavbarLink to="/portfolio">portfolio</NavbarLink>
            <NavbarLink to="/about">about</NavbarLink>
            <NavbarLink to="/blog">blog</NavbarLink>
          </NavbarLinkContainer>
          <button className="nav-btn">Download CV</button>
        </NavbarContainer>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="home" element={<Home />} />
          <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route
            path="portfolio/:repoName"
            element={<ProjectDetails></ProjectDetails>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="blog" element={<Blog></Blog>}></Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </ErrorBoundary>
    </>
  );
};

export default App;
