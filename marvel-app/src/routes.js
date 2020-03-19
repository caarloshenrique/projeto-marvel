import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/Main";
import Details from "./pages/Details";
import Header from "./components/Header";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">
        <Route exact path="/" component={Main} />
        <Route path="/details/:id" component={Details} />
      </div>
    </BrowserRouter>
  );
}
