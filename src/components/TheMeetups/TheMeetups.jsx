import React from "react";
import "./TheMeetups.css";

import EventList from "./EventList";

const EventData = [
  {
    id: "e1",
    title: "Brotherhood Meetup",
    image: "https://content.artofmanliness.com/uploads//2013/06/men.jpg",
    address: "564 Suite, Montero plaza, Naxity",
    description:
      "Brotherhood event meetup is where big bros meet to discuss life and business and maybe, women",
    host: "Stephen Gbolagade",
    time: "5:30 PM (WAT)",
  },

  {
    id: "e2",
    title: "Teenage Hookup",
    image: "https://exerciseright.com.au/wp-content/uploads/2020/03/teen1.jpg",
    address: "555 Placentra plaxa, Naulcity",
    description:
      "Hey teens, let's discuss about how love can find us. Let's mingle and chill together babes and niggas",
    host: "Stephengade",
    time: "11:30 AM (GMT)",
  },

  {
    id: "e3",
    title: "Make Grazy Money",
    image:
      "https://visualworkshops.com/pluginfile.php/770/mod_page/content/4/fun%20and%20easy%20money%20makers%20visualworkshops%20dot%20com.png",
    address: "555 Placentra plaxa, Naulcity",
    description:
      "Poverty is bastard! let's $MONEY and how it can find us. Let's mingle and chill together babes and niggas",
    host: "Macrosuta Technologies",
    time: "2:00 PM (EST)",
  },

  {
    id: "e4",
    title: "Shoot Your Shot",
    image:
      "https://www.pennlive.com/resizer/0oP1hfrx_5j7CmJxEUTaPY5l0NI=/800x0/smart/image.pennlive.com/home/penn-media/width600/img/news/photo/2018/06/29/paintballjpg-eb19ac3a27e24489.jpg",
    address: "555 Placentra plaxa, Naulcity",
    description:
      "Poverty is bastard! let's $MONEY and how it can find us. Let's mingle and chill together babes and niggas",
    host: "GbolaByte Solution",
    time: "12:00 PM (WAT)",
  },
];

const TheMeetups = () => {
  return (
    <section>
      <EventList events={EventData} />
      <EventList events={EventData} />
    </section>
  );
};

export default TheMeetups;
