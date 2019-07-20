import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
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
  addingSmurf: false,
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

    case ADD_SMURF_START: {
      return {
        ...state,
        error: null,
        addingSmurf: true
      };
    }

    case ADD_SMURF_SUCCESS: {
      return {
        ...state,
        error: null,
        addingSmurf: false,
        smurfs: state.smurfs.concat(action.payload)
      };
    }
    case ADD_SMURF_FAILURE: {
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
