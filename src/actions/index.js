import axios from "axios";
// we'll need axios

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const getData = char => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://swapi.co/api/people")
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_DATA_ERROR }));
};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
