import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Wishlist from "../../store/Wishlist";
import classes from "./NavMenu.module.css";

function NavMenu() {
  const WishlistCtx = useContext(Wishlist);

  return (
    <header>
      <div className={classes.mainHeader}>
        <div className={classes.navBrand}>
          <h3>Stefenta</h3>
        </div>

        <div className={classes.navMenu}>
          <ul>
            <li className={classes.navItems}>
              <NavLink to="/" exact activeClassName={classes.active}>
                All Events
              </NavLink>
            </li>

            <li className={classes.navItems}>
              <NavLink to="/new-event" activeClassName={classes.active}>
                New Events
              </NavLink>
            </li>

            <li className={classes.navItems}>
              <NavLink to="/my-favourite" activeClassName={classes.active}>
                Wishlist{" "}
                <span className={classes.navBadge}>{WishlistCtx.maxFavourites}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavMenu;
