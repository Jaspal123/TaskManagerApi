import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar bg-primary">
            <h1><i className="fas fa-tasks" /><span className="m-1">Task Manager</span></h1>
            <ul>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/about">About</Link>
            </li>
            </ul>
        </div>
    )
}

export default Navbar;