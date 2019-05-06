import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Blog from "./components/blog/Blog";

function App() {
  return (
    <Router>
      <Route path="/blog" component={Blog} />
    </Router>
  );
}

export default App;
