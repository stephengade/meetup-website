import React, { useContext } from "react";
import "./TheMeetups.css";
import WishlistContext from "../../store/Wishlist";

function EventContent(props) {
  const wishlistCtx = useContext(WishlistContext);

  const userWishlist = wishlistCtx.userWishlist(props.id);

  const toggleWishlistStatus = () => {
    if (userWishlist) {
      wishlistCtx.removeWishlist(props.id);
    } else {
      wishlistCtx.addWishlist({
        id: props.id,
        title: props.title,
        host: props.host,
        image: props.photo,
        address: props.address,
        description: props.description,
        time: props.time,
      });
    }
  };

  const copyEventLink = () => {
   // copy link shit goes here
  };
  return (
    <li>
      <div className="event-image">
        <img src={props.photo} alt={props.title} />
      </div>

      <div className="event-content">
        <h3>{props.title}</h3>
        <span className="eventHost">
          <p className="event-time">
            <img
              src="https://img.icons8.com/material-outlined/12/ff0000/time.png"
              alt="event time"
            />{" "}
            {props.time}
          </p>
          <p className="event-host">
            <img
              src="https://img.icons8.com/ios-filled/12/ff0000/socrates.png"
              alt="event author"
            />{" "}
            {props.host}
          </p>
        </span>
        <address className="event-address">
          <img
            src="https://img.icons8.com/external-those-icons-fill-those-icons/15/ff0000/external-location-maps-and-locations-those-icons-fill-those-icons-6.png"
            alt="Event Location"
          />{" "}
          {props.address}
        </address>
        <p className="event-description">{props.description}</p>

        <span className="d-flex">
          <button onClick={toggleWishlistStatus}>
            {userWishlist ? "Delete from wishlist" : "Add to Wishlist"}
          </button>
          <p className="copy-link" onClick={copyEventLink}>
            <img
              src="https://img.icons8.com/material-rounded/17/ff0000/copy-link.png"
              alt="copy link"
            />{" "}
            Copy Link
          </p>
        </span>
      </div>
    </li>
  );
}

export default EventContent;
