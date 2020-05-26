/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Recipe.css';

const Header = (props) => {
  const { isLogin } = props;
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
        rel="stylesheet"
      />
      <center>
        <h1>
          <Link to="/" className="site-logo">
            Njango
          </Link>
        </h1>
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
      </center>
    </div>
  );
};

export default withRouter(Header);
