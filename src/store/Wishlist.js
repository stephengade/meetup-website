import { createContext, useState } from "react";

const WishlistContext = createContext({
  wishlists: [],
  maxFavourites: 0,
  addWishlist: (wishlistEvents) => {},
  removeWishlist: (eventId) => {},
  userWishlist: (eventId) => {},
});

export const Wishlist = (props) => {
  const [userWishlist, setUserWishlist] = useState([]);

  const addToWishlist = (wishlistEvents) => {
    setUserWishlist((prev) => {
      return prev.concat(wishlistEvents);
    });
  };

  const removeFromWishlist = (eventId) => {
    setUserWishlist((prev) => {
      return prev.filter((event) => event.id !== eventId);
    });
  };

  const userWishlisted = (eventId) => {
    return userWishlist.some((event) => event.id === eventId);
  };

  const context = {
    wishlists: userWishlist,
    maxFavourites: userWishlist.length,
    addWishlist: addToWishlist,
    removeWishlist: removeFromWishlist,
    userWishlist: userWishlisted,
  };

  return (
    <WishlistContext.Provider value={context}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
