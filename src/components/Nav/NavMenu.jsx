import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";

function NavMenu(props) {
  return (
    <header>
      <div className="main-header">
        <div className="nav-brand">
          <h3>Stefenta</h3>
        </div>

        <div className="nav-menu">
          <ul>
            <li className="nav-item">
              <NavLink to="/" exact activeClassName="active">
                All Events
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/new-event" activeClassName="active">
                New Events
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/my-favourite"
                activeClassName="active"
              >
                Favourite ❤️
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavMenu;
