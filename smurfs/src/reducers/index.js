import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE } from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  loading: false,
  error: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_START: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        smurfs: action.payload
      };
    }
    case REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
