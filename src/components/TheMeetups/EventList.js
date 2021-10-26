import React from "react";
import EventContent from "./EventContent";
import "./TheMeetups.css";

function EventList(props) {
  return (
    <ul className="event-list">
      {props.events.map((event) => (
        <EventContent
          key={event.id}
          id={event.id}
          host={event.host}
          photo={event.image}
          title={event.title}
          description={event.description}
          address={event.address}
          time={event.time}
        />
      ))}
    </ul>
  );
}

export default EventList;
