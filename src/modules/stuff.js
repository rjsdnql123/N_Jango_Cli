import { handleActions } from 'redux-actions';
import axios from 'axios';

const URL = 'http://15.164.220.81:5000/';
const POST_STUFF_PEDING = 'POST_STUFF_PEDING';
const POST_STUFF_SUCCESS = 'POST_STUFF_SUCCESS';
const POST_STUFF_FAILURE = 'POST_STUFF_FAILURE';
const ADD_SELECT_STUFF = 'ADD_SELECT_STUFF';

function postStuffAPI(data) {
  return axios.post(`${URL}/stuff`, data);
}

const initialState = {
  pending: false,
  error: false,
  selectStuff: [],
};

export const toggleSelectStuff = (data) => (dispatch) => {
  dispatch({ type: ADD_SELECT_STUFF, payload: data });
};

export const stuffAction = (data) => (dispatch) => {
  dispatch({ type: POST_STUFF_PEDING });

  return postStuffAPI(data)
    .then((result) => {
      console.log(`${result} = post stuff api result`);
      dispatch({ tyype: POST_STUFF_SUCCESS, payload: result.data });
      return [null, true];
    })
    .error((error) => {
      dispatch({ type: POST_STUFF_FAILURE, payload: error });
      return [error, false];
    });
};

export default handleActions(
  {
    [POST_STUFF_PEDING]: (state) => ({
      ...state,
      pending: true,
      error: false,
    }),
    [POST_STUFF_SUCCESS]: (state) => ({
      ...state,
      pending: false,
      error: false,
    }),
    [POST_STUFF_FAILURE]: (state) => ({
      ...state,
      pending: false,
      error: true,
    }),
    [ADD_SELECT_STUFF]: (state, payload) => {
      const newStuff = state.selectStuff.slice();
      newStuff.forEach((el, idx) => {
        if (el.name === payload.name) {
          newStuff.splice(idx, 1);
        }
      });
      if (newStuff.length === state.selectStuff.length) {
        newStuff.push(payload);
      }
      return {
        ...state,
        selectStuff: [...state.selectStuff, ...newStuff],
      };
    },
  },
  initialState,
);
