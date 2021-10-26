import React from "react";
import "./MainHero.css";

function MainHero() {
  return (
    <div className="main-hero">
      <h2>Your Search for Hookups and Business Meetups Ends Here 😉</h2>
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
