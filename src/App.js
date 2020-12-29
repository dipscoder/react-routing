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
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
  );
}

export default App;
