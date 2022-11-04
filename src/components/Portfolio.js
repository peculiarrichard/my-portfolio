import React from "react";
import photo from "../images/photo.avif";
import Projects from "./Projects";
import Pagination from "./Pagination";
import { PortfolioContainer } from "../Style";
import { useContext } from "react";
import { DataContext } from "./Context";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  const value = useContext(DataContext);
  const [repos] = value.repo;

  return (
    <>
      <Helmet>
        <title>My Portfolio</title>
        <meta name="description" content="here is my portfolio"></meta>
        <link rel="canonical" href="/portfolio"></link>
      </Helmet>
      <PortfolioContainer>
        <div className="left">
          <h1>portfolio.</h1>
          <h4>Check out some of my latest projects</h4>
          <p>
            I've worked at start-ups, tech companies <br></br> and corporates on
            a range of different projects,<br></br> including design systems,
            websites and apps.
          </p>
        </div>
        <img src={photo} alt="" className="portfolio"></img>
      </PortfolioContainer>
      <p className="title">My Projects</p>

      <div>
        {repos.length > 0 ? (
          <>
            <Pagination
              data={repos}
              RenderComponent={Projects}
              pageLimit={2}
              dataLimit={1}></Pagination>
          </>
        ) : (
          <p>fetching data...</p>
        )}
      </div>
    </>
  );
};

export default Portfolio;
