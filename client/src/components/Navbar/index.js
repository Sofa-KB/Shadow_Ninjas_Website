import React from "react";
import Crest from "../../images/guild_crest_small.png"
import Logo from "../../images/logo_xsmall.png"


function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img className="navCrest" src={Crest} alt="Crest"/><img className="navLogo" alt="Logo" src={Logo}/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Events">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Roster">Roster</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://forum.shadow-ninjas.com/">Forum</a>
                    </li>
                 </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;