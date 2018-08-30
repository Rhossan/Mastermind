import {RECEIVE_NEW_ANSWER} from '../actions/answerActions';
const determineAnswer = () => {
  let arr = [];
  while (arr.length < 4){
    let rand = Math.floor(Math.random() * 10);
    if (arr.indexOf(rand) === -1){
      arr.push(rand);
    }
  }
  return arr;
}
const answerReducer = (state = {}, action) => {
  let newState;

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_ANSWER:
      newState = determineAnswer();
      return newState;
    default:
      return state;
  }
}


export default answerReducer;
