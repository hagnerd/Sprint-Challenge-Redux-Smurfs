import axios from "axios";

const BASE_URL = "http://localhost:3333";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";

export const fetchSmurfs = () => async dispatch => {
  dispatch({ type: REQUEST_START });

  return axios
    .get(`${BASE_URL}/smurfs`)
    .then(res => {
      dispatch({ type: REQUEST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REQUEST_FAILURE });
    });
};

export const addSmurf = payload => async dispatch => {
  dispatch({ type: REQUEST_START });

  return axios
    .post(`${BASE_URL}/smurfs`, payload)
    .then(res => {
      dispatch({ type: REQUEST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);

      dispatch({ type: REQUEST_FAILURE });
    });
};

export const updateSmurf = (id, payload) => async dispatch => {
  dispatch({ type: REQUEST_START });

  return axios
    .put(`${BASE_URL}/smurfs/${id}`, payload)
    .then(res => {
      dispatch({ type: REQUEST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);

      dispatch({ type: REQUEST_FAILURE });
    });
};

export const deleteSmurf = id => async dispatch => {
  dispatch({ type: REQUEST_START });

  return axios
    .delete(`${BASE_URL}/smurfs/${id}`)
    .then(res => {
      dispatch({ type: REQUEST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);

      dispatch({ type: REQUEST_FAILURE });
    });
};
