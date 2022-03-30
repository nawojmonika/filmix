import React from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";


const CustomLink = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <li className={`nav-item ${match ? 'active' : ''}`}>
            <Link className="nav-link" to={to} {...props} aria-current={match && 'page'}>{children}</Link>
        </li>
    );
}

export default CustomLink;