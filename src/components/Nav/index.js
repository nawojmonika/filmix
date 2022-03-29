import React from "react";
import CustomLink from "../CustomLink";
import "./Nav.css"


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <CustomLink className="navbar-brand" to='/'>Filmix</CustomLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <CustomLink to='/'>Strona główna</CustomLink>
                        <CustomLink to='/o-nas'>O nas</CustomLink>
                        <CustomLink to='/regulamin'>Regulamin</CustomLink>
                        <CustomLink to='/koszyk'><i className="bi bi-basket"/> Koszyk</CustomLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;