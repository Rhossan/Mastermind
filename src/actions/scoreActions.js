export const RECEIVE_NEW_SCORE = 'RECEIVE_NEW_SCORE';


export const receiveNewScore = score => ({
  type: RECEIVE_NEW_SCORE,
  score
});

export const receiveNewGuess = score => dispatch => dispatch(receiveNewScore(score));
