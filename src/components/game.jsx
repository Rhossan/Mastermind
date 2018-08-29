import React from "react";
import GuessForm from './guessForm'
import EndGameModal from './endGameModal'
import { StyleSheet, css } from "aphrodite";
import {Button} from 'semantic-ui-react';
import LeaderBoard from './leaderBoard';

class Game extends React.Component{
  constructor(props) {
      super(props);
      this.submit = this.submit.bind(this);

    }

    componentDidMount = () => {

    }

    submit = (e) => {
      e.preventDefault();
      this.props.postNewAnswer();
    }

  render() {
    const {slots, pegs} = this.props.guesses;
    const guesses = slots.map(guess => {
      return guess ?
      <div>
        {guess[0]}
        {guess[1]}
        {guess[2]}
        {guess[3]}
      </div> : ''
    })
    const winnerModal = JSON.stringify(pegs[pegs.length-1]) === JSON.stringify([2,2,2,2]) ?
      <EndGameModal props={this.props}/> : ''
    //
    return (
      <div>
        <div><GuessForm props={this.props}/></div>
        {guesses}
        <Button secondary onClick={this.submit}>Reset</Button>
        {winnerModal}
      </div>
    )
  }
}

export default Game;
// we will render all guesses here, and then
// guessform as the last thing, guessform will have submit button
