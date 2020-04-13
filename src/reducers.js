import {INCREASE_ONE, DECREASE_ONE} from './actions';

const initialState = {
  number: 1
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREASE_ONE: 
      return {
        number: state.number + 1
      };
    case DECREASE_ONE: 
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default reducer;
