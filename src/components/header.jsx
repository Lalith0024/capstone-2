import React from "react";

const Header = () => {
    return(
        <>
        <nav className="navbar">
            <div className="appname">Recipe Maker</div>

            <ul className="navbar-links">
              <li>Home</li>
              <li>Category Wise</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </>
    )
    

}
export default Header;