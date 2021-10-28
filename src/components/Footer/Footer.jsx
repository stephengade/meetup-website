import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="main-footer">

        <div className="footer-brand">
          <h3>About Stefenta</h3>
          <p>
            People need love and network, but most people are boxed in. Stefenta
            is here to change the narrative..
          </p>
        </div>

        <div className="footer-menu">
          <h3>Company</h3>
          <ul>
            <li className="footer-item">
              <NavLink to="/" exact activeClassName="f_active">
                All Events
              </NavLink>
            </li>

            <li className="footer-item">
              <NavLink to="/new-event" activeClassName="f_active">
                New Events
              </NavLink>
            </li>

            <li className="footer-item">
              <NavLink to="/my-favourite" activeClassName="f_active">
                Wishlist
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-subscribe">
          <h3>Become an insider</h3>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter email address here"
              required="required"
            />{" "}
            <br />
            <button>Join us</button>
          </form>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
