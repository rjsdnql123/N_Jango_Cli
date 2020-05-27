// eslint-disable-next-line quotes
import React from 'react';
// eslint-disable-next-line quotes
import { Link } from 'react-router-dom';

export default () => (
  <header className="header">
    <ul className="ul">
      <li className="li">
        <Link to="/mypage" className="link">
          내 냉장고
        </Link>
      </li>
      <li className="li">
        <Link to="/mypage/recipe" className="link">
          내 레시피
        </Link>
      </li>
      <li className="li">
        <Link to="./Like" className="link">
          좋아요
        </Link>
      </li>
    </ul>
  </header>
);
