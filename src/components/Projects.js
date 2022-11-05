import React from 'react';
import {Link, Outlet } from 'react-router-dom';
import {Project} from '../Style';

const Projects = (props) => {
  return (
    <>
    <Project>
        <h2>{props.data.name}</h2>
        <p>Major tools used: {props.data.language}</p>
        
        <Link key={props.data.id} to ={props.data.name}>
            <button>see more details</button>
        </Link>
        <Outlet/>
     </Project> 
    </>
  )
}

export default Projects