import { handleActions } from 'redux-actions';
import axios from 'axios';

const URL = 'http://15.164.220.81:5000/';
const GET_RECIPE_PEDING = 'GET_RECIPE_PEDING';
const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
const GET_RECIPE_FAILURE = 'GET_RECIPE_FAILURE';

function getRecipeAPI(data) {
  return axios.get(`${URL}/recipe`, data);
}

const initialState = {
  pending: false,
  error: false,
  recipes: [],
};

export const stuffAction = (data) => (dispatch) => {
  dispatch({ type: GET_RECIPE_PEDING });

  return getRecipeAPI(data)
    .then((result) => {
      console.log(`${result} = get recipe api result`);
      dispatch({ type: GET_RECIPE_SUCCESS, payload: result.data });
      return [null, true];
    })
    .catch((error) => {
      dispatch({ type: GET_RECIPE_FAILURE, payload: error });
      return [error, false];
    });
};

export default handleActions(
  {
    [GET_RECIPE_PEDING]: (state) => ({
      ...state,
      pending: true,
      error: false,
    }),
    [GET_RECIPE_SUCCESS]: (state) => ({
      ...state,
      pending: false,
      error: false,
    }),
    [GET_RECIPE_FAILURE]: (state) => ({
      ...state,
      pending: false,
      error: true,
    }),
  },
  initialState,
);
