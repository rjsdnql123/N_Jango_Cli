/* eslint-disable */
import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from './Header';
// import Stuff from './Stuff';
// import Recipe from './Recipe';
// import Like from './Like';
// import Follow from './Follow';
// import Comment from './Comment';
// import './Mypage.css';

axios.defaults.withCredentials = true;

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/mypage" exact component={Stuff} /> */}
        {/* <Route path="/mypage/recipe" component={Recipe} />
        <Route path="/mypage/like" component={Like} />
        <Route path="/mypage/follow" component={Follow} />
        <Route path="/mypage/comment" component={Comment} /> */}
        <Redirect from="*" to="/mypage" />
      </Switch>
    </Router>
  );
};
// export function Mypage(props) {
//   const { isLogin, userinfo } = props;
//   const userinfok = {
//     username: "kang",
//     email: "uukel@gmail.com",
//     mobile: "020",
//   };
// if (isLogin) {

// return (
//   <div>
//     <h1>Mypage</h1>
//     <div className="myinfo">
//       <div className="username">{userinfok.username}</div>
//       <div className="email">{userinfok.email}</div>
//       <div className="mobile">{userinfok.mobile}</div>
//       <button>재료 등록</button>
//       <button>레시피 등록</button>
//     </div>

//     <div className="nav">
//       <ul>
//         <li>
//           <Link to="/Login">메인페이지</Link>
//         </li>
//         <li>
//           <Link to="/Stuff">내 냉장고</Link>
//         </li>
//         <li>
//           <Link to="/recipe">내 레시피</Link>
//         </li>
//         <li>
//           <Link to="/comment">내 댓글</Link>
//         </li>
//         <li>
//           <Link to="/follow">팔로워/팔로잉</Link>
//         </li>
//         <li>
//           <Link to="/like">내 좋아요</Link>
//         </li>
//       </ul>
//       <hr />
//     </div>
//   </div>
// );
//}
// return (
//   <div>
//     <h1>NOT FOUND</h1>
//   </div>
// );
//}
