import React from "react";
import { Repo } from "../Style";
import { DataContext } from "./Context";
import { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const [currentRepo, setCurrentRepo] = useState([]);
  const params = useParams();

  const value = useContext(DataContext);
  const [repos] = value.repo;

  useEffect(() => {
    const res = repos.find((repo) => {
      if (repo.name === params.repoName) {
        setCurrentRepo(repo);
      }
    });
    return res;
  }, [repos, params.repoName]);
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
        {currentRepo ? (
          <Repo>
            <div key={currentRepo.id} className="repolist">
              <h2>Project name: {currentRepo.name}</h2>
              <p>{currentRepo.description}</p>
              <div>
                <a href={currentRepo.svn_url} target="_blank" rel="noreferrer">
                  <button>source code</button>
                </a>
                {currentRepo.homepage !== "" ? (
                  <a
                    href={`https://${currentRepo.homepage}`}
                    target="_blank"
                    rel="noreferrer">
                    <button>view site</button>
                  </a>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </Repo>
        ) : (
          "loading..."
        )}
        <Link to = "/portfolio" className="btn">
              <button >back</button>
        </Link>
      </div>
    </>
  );
};

export default ProjectDetails;
