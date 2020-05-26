import { handleActions } from 'redux-actions';
import axios from 'axios';

const URL = 'http://15.164.220.81:5000/';
const POST_SIGNUP_PEDING = 'POST_SIGNUP_PEDING';
const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILURE';

function postSignupAPI(data) {
  return axios.post(`${URL}/user/signup`, data);
}

const initialState = {
  pending: false,
  error: false,
};

export const signupAction = (data) => (dispatch) => {
  dispatch({ type: POST_SIGNUP_PEDING });

  return postSignupAPI(data)
    .then((result) => {
      console.log(`${result} = post signup api result`);
      dispatch({ tyype: POST_SIGNUP_SUCCESS, payload: result.data });
      return [null, true];
    })
    .error((error) => {
      dispatch({ type: POST_SIGNUP_FAILURE, payload: error });
      return [error, false];
    });
};

export default handleActions(
  {
    [POST_SIGNUP_PEDING]: (state) => ({
      ...state,
      pending: true,
      error: false,
    }),
    [POST_SIGNUP_SUCCESS]: (state) => ({
      ...state,
      pending: false,
      error: false,
    }),
    [POST_SIGNUP_FAILURE]: (state) => ({
      ...state,
      pending: false,
      error: true,
    }),
  },
  initialState,
);
