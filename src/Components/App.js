import React from "react";
import {BrowserRouter as Router,  Switch,  Route, Link, BrowserRouter} from "react-router-dom";
import sideBar from "./sidebar"


function App() {
  return (
    <Router>

      <link to="/">home</link>
      <switch>
        <Route path="/" component={sideBar}/>
      </switch>
    </Router>
  )
 
}

export default App;
