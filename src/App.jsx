import React from "react";
import About from './About';
import Home from './Home';
import Error from './Error';
import { Route, Router, Switch, Routes, BrowserRouter } from "react-router-dom";


function App() {

  return (
    <>
      <main>
        <Switch>
          <Route path="/" component={About} exact />
          <Route path='/home' component={Home} />
          <Route component={Error} />
        </Switch>
      </main>
    </>
  );
}

export default App;
