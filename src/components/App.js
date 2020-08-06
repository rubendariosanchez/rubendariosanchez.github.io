import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Education from "../pages/Education.jsx";
import NotFound from '../pages/NotFound.jsx';
import '../styles/App.css';
import Experience from '../pages/Experience.jsx';


function App() {

  // Se retorna el aplicativo principal
  return (
    <>
    <HashRouter basename='/'>
      <Switch>
        <Route exact path="/about" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="*" component={NotFound}/>
      </Switch>
    </HashRouter>
    </>
  );
}

export default App;
