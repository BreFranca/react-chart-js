import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Main} from "./Main"
import VerticalMenu from "./components/VerticalMenu"
import PageOne from "./screens/PageOne"
import PageTwo from "./screens/PageTwo"
import PageError from "./screens/PageError"

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <VerticalMenu />
        <Main>
          <Route path="/" exact component={PageOne} />
          <Route path="/page-two/" exact component={PageTwo} />
          <Route path='*' component={PageError} />
        </Main>
      </div>
    </Router>
  );
}

export default App;
