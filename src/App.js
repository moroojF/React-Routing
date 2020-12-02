import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Router } from '@reach/router'
import PageOne from './components/PageOne.jsx';
import PageTwo from './components/PageTwo.jsx';
import PageThree from './components/PageThree.jsx';

function App() {
  return (
    <div className="container">
      <Router>
        <PageOne path="/home" />
        <PageTwo path="/:var" />
        <PageThree path="/:word/:tColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
