import { Route, Switch } from "react-router-dom";
import "./App.css";

import AllEvents from "./pages/AllEvents";
import NewEvents from "./pages/NewEvents";
import FavouriteEvents from "./pages/FavouriteEvents";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <AllEvents />
        </Route>

        <Route path="/new-event">
          <NewEvents />
        </Route>

        <Route path="/my-favourite">
          <FavouriteEvents />
        </Route>
      </Switch>
    </>
  );
};

export default App;
