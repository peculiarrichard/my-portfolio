import React from "react";
import { PortfolioContainer } from "../Style";
import about from "../images/aboutphoto.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  const style = {
    height: "30rem",
  };
  return (
    <>
      <Helmet>
        <title>About me</title>
        <meta name="description" content="get to know Peculiar Richard"></meta>
        <link rel="canonical" href="/about"></link>
      </Helmet>
      <PortfolioContainer>
        <div className="left">
          <h1>about.</h1>
          <h4>
            I'm a marketer and developer <br></br>based in Lagos, Nigeria
          </h4>
          <p>
            I am passionate about solving <br></br> problems and bringing ideas
            to live with my skills, and knowledge.<br></br> When I'm not
            working, you will find me either <br></br>working out, reading
            fantasy novels, or playing card games.
          </p>
        </div>
        <img src={about} alt="about" className="portfolio" style={style}></img>
      </PortfolioContainer>
    </>
  );
};

export default About;
