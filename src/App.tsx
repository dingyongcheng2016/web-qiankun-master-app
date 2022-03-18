import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams }  from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Topics from './pages/topics';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/topics">
          <Topics/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
