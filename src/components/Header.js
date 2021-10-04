import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleApps from "./GoogleApps";

const Header = () => {
    const [toggleApps, setToggleApps] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <Link to="/gmail" className="navbar-link">
                    Gmail
                </Link>
                <Link to="/images" className="navbar-link">
                    Images
                </Link>
                <svg
                    onClick={() => setToggleApps(!toggleApps)}
                    className="navbar-icon"
                    focusable="false"
                    viewBox="0 0 24 24"
                >
                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                </svg>
                <Link to="/">
                    <div className="avatar-icon navbar-icon"></div>
                </Link>
            </div>
            {toggleApps && <GoogleApps />}
        </nav>
    );
};
export default Header;
