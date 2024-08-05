import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
};

export default App;
