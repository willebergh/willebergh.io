import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Global layout components
import Header from "./components/layout/Header";

// Routing components
import Landing from "./components/landing/Landing";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <Router>

      <Header />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
