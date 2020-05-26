/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Header = (props) => {
  const { isLogin } = props;
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
        rel="stylesheet"
      />
      <center>
        <h1
          style={{
            fontSize: '5rem',
            fontFamily: 'Fredoka One',
          }}
        >
          <Link to="/" style={{ color: '#0f5bea', textDecoration: 'none' }}>
            Njango
          </Link>
        </h1>
        <div
          className="nav"
          style={{
            width: '30%',
            padding: '0.5%',
            backgroundColor: '#BBDEFB',
          }}
        >
          <div className="toggleNav">
            <span className="toggleBtn" />
            <span className="toggleBtn" />
            <span className="toggleBtn" />
          </div>
          {isLogin ? (
            <>
              <Link to="/mypage" style={{ textDecoration: 'none' }}>
                mypage
              </Link>
              &nbsp; &nbsp;&nbsp;
              <Link to="/signout" style={{ textDecoration: 'none' }}>
                logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                signup
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link to="/login" style={{ textDecoration: 'none' }}>
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
