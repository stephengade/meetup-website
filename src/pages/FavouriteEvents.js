import React, { useContext } from "react";
import Wishlist from "../store/Wishlist";
import EventList from "../components/TheMeetups/EventList";

function FavouriteEvents() {
  const WishlistCtx = useContext(Wishlist);

  let content;

  if (WishlistCtx.maxFavourites === 0) {
    content = (
      <p style={{ fontSize: "2rem", textAlign: "center", margin: "2rem auto 20% auto" }}>
        No wishlist here
      </p>
    );
  } else {
    content = <EventList events={WishlistCtx.wishlists} />;
  }

  return (
    <section>
      <h2
        style={{ textAlign: "center", marginTop: "20px", fontSize: "2.5rem" }}
      >
        My Favourited Events
      </h2>
      {content}
    </section>
  );
}

export default FavouriteEvents;
