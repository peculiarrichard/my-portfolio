import React from "react";
import heroimg from "../images/heroimg.jpg";
import growth from "../images/growth.jpg";
import coder from "../images/coder.jpg";
import writing from "../images/writing.jpg";
import { Hero, Services } from "../Style";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Peculiar Richard</title>
        <meta name="description" content="Peculiar Richard's website"></meta>
        <link rel="canonical" href="/"></link>
      </Helmet>
      <Hero>
        <div className="marketer">
          <h1>marketer</h1>
          <p>
            Growth Engineer specializing in <br></br>engineering growth for tech
            companies.{" "}
          </p>
        </div>
        <img src={heroimg} alt="" className="heroimg"></img>
        <div className="marketer">
          <h1>{`<coder/>`}</h1>
          <p>
            Frontend and Solidity Developer who <br></br>writes clean, elegant
            and efficient codes.{" "}
          </p>
        </div>
      </Hero>

      <Services>
        <p className="title">What I can do for you</p>
        <div className="section">
          <div className="service">
            <img src={coder} alt="" className="img"></img>
            <h2>frontend apps</h2>
            <p>Build client-side applications with modern features</p>
          </div>
          <div className="service">
            <img src={growth} alt="" className="img"></img>
            <h2>Growth engineering</h2>
            <p>Engineer growth for your tech startup</p>
          </div>
          <div className="service">
            <img src={writing} alt="" className="img"></img>
            <h2>technical writing</h2>
            <p>Write for all kinds of audiences</p>
          </div>
        </div>
      </Services>
    </>
  );
};

export default Home;
