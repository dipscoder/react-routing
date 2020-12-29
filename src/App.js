import React from "react"
import './App.css';
import About from "./About";
import Nav from "./Nav"
import Shop from "./Shop";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router >
      <div className="App">
        <Nav />
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

// * Switch - it stops rendering the further text as soon as it find the searched url
// ! Problem - It will stop at "/" & renders "Home" even if you want to go to "/about"
// Solution - add "exact" to the home Route
const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
)

export default App;
