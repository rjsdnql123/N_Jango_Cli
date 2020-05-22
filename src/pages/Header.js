/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Header = (props) => {
  const { isLogin, handleLogin } = props;
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
      <center>
        <h1 style={{
          fontSize: '5rem', fontFamily: 'Fredoka One', color: '#0f5bea',
        }}
        >
          Njango
        </h1>
        <div
          className="nav"
          style={{
            width: '20%', maxWidth: '220px', padding: '0.5%', backgroundColor: '#BBDEFB',
          }}
        >
          {isLogin ? (
            <>
              <Link to="/mypage">mypage</Link>
            &nbsp; &nbsp;&nbsp;
              {/* <Link to="/user/signout">logout</Link> */}
              <button onClick={handleLogin} type="button">logout</button>
            </>
          ) : (
            <>
              <Link to="/user/signup">signup</Link>
            &nbsp;&nbsp;&nbsp;
              {/* <Link to="user/signin">login</Link> */}
              <button onClick={handleLogin} type="button">login</button>
            </>
          )}
        </div>
      </center>
    </div>
  );
};

export default withRouter(Header);
