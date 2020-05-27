import { handleActions } from 'redux-actions';
import axios from 'axios';

import { fakeData_r } from '../fakeData_r';

const URL = 'http://15.164.220.81:5000/';
const GET_MYPAGE_PEDING = 'GET_MYPAGE_PEDING';
const GET_MYPAGE_SUCCESS = 'GET_MYPAGE_SUCCESS';
const GET_MYPAGE_FAILURE = 'GET_MYPAGE_FAILURE';

function getMypageAPI() {
  const token = localStorage.get('token');
  return axios.get(`${URL}/mypage`, token);
}

const initialState = {
  pending: false,
  error: false,
  userinfo: {
    id: null,
    email: null,
    password: null,
    username: null,
    createdAt: null,
    updatedAt: null,
    followers: [],
    followings: [],
    stuffs: [],
    comments: [],
    recipes: [],
    likes: [],
  },
};

export const fakeAPI = () => (dispatch) => {
  dispatch({ type: GET_MYPAGE_PEDING });
  return setTimeout(() => {
    dispatch({ type: GET_MYPAGE_SUCCESS, payload: { recipes: fakeData_r } });
  }, 3000);
};

export const getMypageAction = (data) => (dispatch) => {
  dispatch({ type: GET_MYPAGE_PEDING });

  return getMypageAPI(data)
    .then((result) => {
      console.log(`${result} = get mypage api result`);
      dispatch({ type: GET_MYPAGE_SUCCESS, payload: result.data });
      return [null, true];
    })
    .catch((error) => {
      dispatch({ type: GET_MYPAGE_FAILURE, payload: error });
      return [error, false];
    });
};

export default handleActions(
  {
    [GET_MYPAGE_PEDING]: (state) => ({
      ...state,
      pending: true,
      error: false,
    }),
    [GET_MYPAGE_SUCCESS]: (state, { payload }) => ({
      ...state,
      pending: false,
      error: false,
      userinfo: {
        ...state.userinfo,
        ...payload,
      },
    }),
    [GET_MYPAGE_FAILURE]: (state) => ({
      ...state,
      pending: false,
      error: true,
    }),
  },
  initialState,
);
