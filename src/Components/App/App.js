import React from 'react';
import Header from '../Header/Header';
import SwipeButtons from '../SwipeButtons/SwipeButtons';
import TinderCards from '../TinderCards/TinderCards';
import Chats from '../Chats/Chats';
import ChatScreen from '../ChatScreen/ChatScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path='/chats/:person'>
            <Header backButton='/chats' />
            <ChatScreen />
          </Route>
          <Route path='/chats'>
            <Header backButton='/' />
            <Chats />
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
