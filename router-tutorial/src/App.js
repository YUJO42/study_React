import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import './App.css';
import Profile from './Components/Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/info">INFO</Link>
        </li>
        <li>
          <Link to="/profile/yujo">yujo`s profile</Link>
        </li>
        <li>
          <Link to="/profile/sucho">sucho`s profile</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;
