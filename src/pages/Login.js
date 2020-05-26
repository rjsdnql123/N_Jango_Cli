/* eslint-disable */
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginAction from '../modules/login';

import Input from '../components/Input';
import Button from '../components/Button';
import './Login.css';

axios.defaults.withCredentials = true;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  submitHandle(e) {
    e.preventDefault();
    loginAction(this.state);
  }
  render() {
    const { email, password } = this.state;
    const { loginAction } = this.props.loginAction;
    return (
      <div className="login-rayout">
        <h1>Njango</h1>
        <h2>Sign In</h2>
        <form onSubmit={this.submitHandle}>
          <div>
            <Input
              type="email"
              placeholder="아이디"
              value={email}
              onChange={this.handleInputValue('email').bind(this)}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={this.handleInputValue('password').bind(this)}
            />
          </div>
          <Button text="로그인" />
        </form>
      </div>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({
      isLogin: state.login.isLogin,
    }),
    (dispatch) => ({
      loginAction: bindActionCreators(loginAction, dispatch),
    }),
  )(Login),
);
