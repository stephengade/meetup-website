import React from "react";
import "./TheMeetups.css";

function EventContent(props) {
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

        <button>Add to Box</button>
      </div>
    </li>
  );
}

export default EventContent;
