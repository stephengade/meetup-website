import React from "react";
import AddEvent from "../components/AddEvent/AddEvent";

function NewEvents() {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px", fontSize: "3rem" }}>
        Wishlist Events
      </h2>
      <AddEvent />
    </div>
  );
}

export default NewEvents;
