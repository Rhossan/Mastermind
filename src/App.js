import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
// import Header from './header/header';
import gameContainer from './components/gameContainer';
import leaderboardContainer from './components/leaderboardContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={gameContainer}/>
          </Switch>
      </div>
    );
  }
}

export default App;


// <Route exact path='/leaderboard' component={leaderboardContainer}/>
