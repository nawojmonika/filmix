import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Strona główna</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cennik">Cennik</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/o-nas">O nas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/regulamin">Regulamin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;