import { handleActions } from 'redux-actions';
import axios from 'axios';

const URL = 'http://15.164.220.81:5000/';
const POST_LOGIN_PEDING = 'POST_LOGIN_PEDING';
const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

axios.defaults.withCredentials = true;

function postLoginAPI(data) {
  return axios.post(`${URL}/user/signin`, data);
}

function postLogoutAPI() {
  return axios.post(`${URL}/user/logout`);
}

const initialState = {
  pending: false,
  error: false,
  isLogin: localStorage.getItem('isLogin') === 'true',
  token: localStorage.getItem('token'),
};

export const loginAction = (data) => (dispatch) => {
  dispatch({ type: POST_LOGIN_PEDING });

  return postLoginAPI(data)
    .then((result) => {
      console.log(`${result} = post login api result`);
      localStorage.setItem('token', result.data);
      localStorage.setItem('isLogin', 'true');
      dispatch({ tyype: POST_LOGIN_SUCCESS, payload: result.data });
      return [null, true];
    })
    .catch((error) => {
      dispatch({ type: POST_LOGIN_FAILURE, payload: error });
      return [error, false];
    });
};

export const logout = () => (dispatch) =>
  postLogoutAPI().then(() => {
    dispatch({ type: LOGOUT });
  });

export default handleActions(
  {
    [POST_LOGIN_PEDING]: (state) => ({
      ...state,
      pending: true,
      error: false,
      isLogin: false,
    }),
    [POST_LOGIN_SUCCESS]: (state) => ({
      ...state,
      pending: false,
      error: false,
      isLogin: true,
    }),
    [POST_LOGIN_FAILURE]: (state) => ({
      ...state,
      pending: false,
      error: true,
      isLogin: false,
    }),
  },
  initialState,
);
