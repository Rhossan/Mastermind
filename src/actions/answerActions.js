export const RECEIVE_NEW_ANSWER = 'RECEIVE_NEW_ANSWER';

export const receiveNewAnswer = () => ({
  type: RECEIVE_NEW_ANSWER
});

export const postNewAnswer = () => dispatch => dispatch(receiveNewAnswer());
