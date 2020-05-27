import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';
import mypage from './mypage';
import stuff from './stuff';
import recipe from './recipe';

export default combineReducers({
  login,
  signup,
  mypage,
  stuff,
  recipe,
});
