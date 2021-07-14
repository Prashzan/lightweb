import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <div>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
};

export default App;
