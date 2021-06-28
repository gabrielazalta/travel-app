import React from 'react';
import planeIcon from "../../assets/icon/icon.png";

function Navbar(props) {
    const navLinks = ['home', 'quiz', 'weather',];
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
            <h1 className="header-title px-2 mx-2">
                <img src={planeIcon} className="my-2 planeIcon" style={{ width: "5%" }} alt="cover" />
                Next Destination
            </h1>
            <div className="collapse navbar-collapse justify-content-end p-2 mx-4" id="navbarNavAltMarkup">
                <div className="navbar-nav none">
                {navLinks.map(tabs => (
                        <li className="nav-link" key={tabs}>
                            <a href={"#" + tabs.toLowerCase()}
                            onClick={() => props.setCurrentPage(tabs)}
                            className={props.currentPage === tabs ? "active" : "nav-link"}>
                                {tabs}
                            </a>
                        </li>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;