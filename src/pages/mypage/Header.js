// eslint-disable-next-line quotes
/* eslint-disable */
import React from "react";
// eslint-disable-next-line quotes
import { Link } from "react-router-dom";
import "./mypageHeader.css"

export default () => (
  <div>
    <center>
      <div className="mypageheader">
        <ul className="ul">
          <li className="li">
            <Link to="/mypage/" className="link">
              내 냉장고
        </Link>
          </li>
          <li className="li">
            <Link to="/mypage/recipe" className="link">
              내 레시피
        </Link>
          </li>
          <li className="li">
            <Link to="/mypage/like" className="link">
              좋아요
        </Link>
          </li>
          <li className="li">
            <Link to="/mypage/follow" className="link">
              팔로우
        </Link>
          </li>
          <li className="li">
            <Link to="/mypage/comment" className="link">
              내 댓글
        </Link>
          </li>
        </ul>
      </div>
    </center>
  </div>
);
