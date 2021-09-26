import React from "react";
import './NavbarComp.css';

class NavbarComponent extends React.Component {

    render() {
        return(
            <div>
            <nav className="NavbarItem">
                <ul className="nav-menu">
                    <li className="nav-link"><a href="/">Home</a></li>
                    <li className="nav-link"><a href="/">Service</a></li>
                    <li className="nav-link"><a href="/">Contact</a></li>
                    <li className="nav-link"><a href="/">About</a></li>
                </ul>    
            </nav>
            </div>
        )
    }
}

export default NavbarComponent;