import React from 'react';
import Header from '../Header/Header';
import TinderCards from '../TinderCards/TinderCards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/chat'>
            <h1>chat</h1>
          </Route>
          <Route path='/'> 
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
