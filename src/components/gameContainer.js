import {connect} from 'react-redux';
import Game from './game';
import {postNewGuess} from '../actions/guessesActions';
// import {receiveNewScore} from '../actions/activityActions';

const mapStateToProps = (state) => {
  return {
    guesses: state.guesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postNewGuess: (guess) => dispatch(postNewGuess(guess))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
