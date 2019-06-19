import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCH_DATA_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};
