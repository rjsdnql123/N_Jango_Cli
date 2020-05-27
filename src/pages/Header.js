/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Recipe.css';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Header = (props) => {
  const { isLogin } = props;
  return (
    <div className="header">
      <Logo />
      <Nav isLogin={isLogin} />
    </div>
  );
};

export default withRouter(
  connect((state) => ({
    isLogin: state.login.isLogin,
  }))(Header),
);
