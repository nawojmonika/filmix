import React from "react";
import CustomLink from "../CustomLink";
import "./Nav.css"


const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <CustomLink className="navbar-brand" to='/'>Filmix</CustomLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <CustomLink to='/'>Strona główna</CustomLink>
                    <CustomLink to='/o-nas'>O nas</CustomLink>
                    <CustomLink to='/regulamin'>Regulamin</CustomLink>
                    <CustomLink to='/koszyk'><i className="bi bi-basket" /> Koszyk</CustomLink>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;