import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from "../actions";

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
  fetchingSmurfs: false,
  error: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS_START: {
      return {
        ...state,
        fetchingSmurfs: true
      };
    }

    case FETCH_SMURFS_SUCCESS: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      };
    }
    case FETCH_SMURFS_FAILURE: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
