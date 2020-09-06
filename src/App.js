import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Post from "./component/Post/Post";
import Error from "./component/Error/Error";
import Detail from "./component/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/postDetail/:userID">
              <Detail />
            </Route>

            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
