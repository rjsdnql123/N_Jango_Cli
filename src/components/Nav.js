import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Nav.css';

const Nav = ({ isLogin }) => (
  <div className="nav">
    {isLogin ? (
      <>
        <Link to="/mypage" className="nav-link">
          mypage
        </Link>
        &nbsp; &nbsp;&nbsp;
        <Link to="/signout" className="nav-link">
          logout
        </Link>
      </>
    ) : (
      <>
        <Link to="/signup" className="nav-link">
          signup
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/login" className="nav-link">
          login
        </Link>
      </>
    )}
  </div>
);

Nav.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default Nav;
