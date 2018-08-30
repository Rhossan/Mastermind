import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import gameContainer from './components/gameContainer';
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
