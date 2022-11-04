import React from "react";
import { Repo } from "../Style";
import { DataContext } from "./Context";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";

const ProjectDetails = () => {
  const value = useContext(DataContext);
  const [repos] = value.repo;
  return (
    <>
      <Helmet>
        <title>Developer projects</title>
        <meta
          name="description"
          content="some of the software development projects I've worked on"></meta>
        <link rel="canonical" href="/portfolio/projectdetails"></link>
      </Helmet>
      <div>
        {repos.map((item) => (
          <Repo>
            <div key={item.id} className="repolist">
              <h2>Project name: {item.name}</h2>
              <p>{item.description}</p>
              <div>
                <a href={item.svn_url} target="_blank" rel="noreferrer">
                  <button>source code</button>
                </a>
                <a
                  href={`https://${item.homepage}`}
                  target="_blank"
                  rel="noreferrer">
                  <button>view site</button>
                </a>
              </div>
            </div>
          </Repo>
        ))}
      </div>
    </>
  );
};

export default ProjectDetails;
