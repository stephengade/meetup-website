import React from "react";
import "./MainHero.css";

function MainHero() {
  return (
    <div className="main-hero">
      <h2>Your Search for Hookups & Business Meetups Ends Here</h2>
      <p className="event-info">
        Find introverts and single people like you, get connected and entangled.
        You're serious with life? Join Business meetups too...
      </p>
      <form>
        <input
          type="search"
          placeholder="search for location"
          required="required"
        />
        <button type="submit" className="search-btn">
          <img
            src="https://img.icons8.com/ios/30/ff0000/search.png"
            alt="search location"
          />
        </button>
      </form>
    </div>
  );
}

export default MainHero;
