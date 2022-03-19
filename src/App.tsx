import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams }  from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Topics from './pages/topics';
import logo  from './logo.svg';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul className='App-header'>
          <li>
            <Link to="/">Home</Link>|
          </li>
          <li>
            <Link to="/about">About</Link>|
          </li>
          <li>
            <Link to="/sub-app-react/home">React-Sub-Home</Link>|
          </li>
          <li>
            <Link to="/sub-app-react/about">React-Sub-About</Link>|
          </li>
          <li>
            <Link to="/sub-app-vue/home">Vue-Sub-Home</Link>|
          </li>
          <li>
            <Link to="/sub-app-vue/about">Vue-Sub-About</Link>|
          </li>
          <li>
            <Link to="/sub-app-vue3/home">Vue3-Sub-Home</Link>|
          </li>
          <li>
            <Link to="/sub-app-vue3/about">Vue3-Sub-About</Link>|
          </li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
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
      <div id='container'></div>
    </Router>
  );
}

export default App;
