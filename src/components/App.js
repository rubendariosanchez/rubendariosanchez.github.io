import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import '../styles/App.css';

function App() {
  return (
    <>
    <Router>
     <Switch>
        <Route path="/home" component={Home} />
        <Route path="*" component={Home}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
