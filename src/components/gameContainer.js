import {connect} from 'react-redux';
import Game from './game';
import {postNewGuess} from '../actions/guessesActions';
import {postNewAnswer} from '../actions/answerActions';
// import {receiveNewScore} from '../actions/activityActions';

const mapStateToProps = (state) => {
  return {
    guesses: state.guesses,
    answer: state.answer,
    score: state.score
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postNewGuess: (guess) => dispatch(postNewGuess(guess)),
    postNewAnswer: () => dispatch(postNewAnswer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
