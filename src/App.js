import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      {/* RENDER NO MATTER WHAT ROUTE ITS IN */}
      <Header />
      <div className="app">
        <Switch>
          {/* By placing Components underneath a path, those are the components which get rendered */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* DEFAULT ROOT AT THE BOTTOM */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
