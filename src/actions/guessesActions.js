export const RECEIVE_NEW_GUESS = 'RECEIVE_NEW_GUESS';


export const receiveNewGuess = guess => ({
  type: RECEIVE_NEW_GUESS,
  guess
});

export const postNewGuess = guess => dispatch => dispatch(receiveNewGuess(guess));
