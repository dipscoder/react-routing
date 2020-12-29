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
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
  );
}

// ! Problem - If we don't use the switch then the Route will render the Home page even if we go to the url "/about" or "/shop"
// * Because as soon as Route encounter the "/" it will render the Home page , it will not check the text present after the "/"  
// Explanation - https://www.youtube.com/watch?v=Law7wfdg_ls&t=155s 10:50
const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
)

export default App;
