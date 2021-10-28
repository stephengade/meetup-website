import React, { useEffect, useState } from "react";
import "./TheMeetups.css";

import EventList from "./EventList";
import Intro from "../Intro/Intro";

const TheMeetups = () => {
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch("https://stefenta-001-default-rtdb.firebaseio.com/events.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const events = [];

        for (const key in data) {
          const event = {
            id: key,
            ...data[key],
          };
          events.push(event);
        }

        setLoading(false);
        setEventData(events);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <h4>
          <i>Loading, please wait...</i>
        </h4>
      </section>
    );
  }

  return (
    <section>
      <Intro />
      <EventList events={eventData} />
    </section>
  );
};

export default TheMeetups;
