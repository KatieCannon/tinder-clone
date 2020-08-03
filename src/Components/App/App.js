import React from 'react';
import Header from '../Header/Header';
import SwipeButtons from '../SwipeButtons/SwipeButtons';
import TinderCards from '../TinderCards/TinderCards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path='/chats'>
          <Header backButton='/' />
            <h1>chat</h1>
          </Route>
          <Route path='/'> 
          <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
