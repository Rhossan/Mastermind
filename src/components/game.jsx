import React from "react";
import GuessForm from './guessForm'
import { StyleSheet, css } from "aphrodite";

class Game extends React.Component{
  constructor(props) {
      super(props);
    }
  render() {
    const guesses = this.props.guesses.pegs.map(guess => {
      return guess ?
      <div>
        {guess[0]}
        {guess[1]}
        {guess[2]}
        {guess[3]}
      </div> : ''
    })
    //
    return (
      <div>
        <div><GuessForm props={this.props}/></div>
        {guesses}
      </div>
    )
  }
}

export default Game;
// we will render all guesses here, and then
// guessform as the last thing, guessform will have submit button
