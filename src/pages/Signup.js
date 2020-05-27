/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import * as actions from '../modules/signup';
import Input from '../components/Input';
import Button from '../components/Button';
import './Recipe.css';

axios.defaults.withCredentials = true;
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const {
      history,
      postSignup: { signupAction },
    } = this.props;
    return (
      <div className="signup">
        <h1>Njango</h1>
        <h2>Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동 하세요.
            signupAction(this.state)
              .then((res) => {
                console.log(res);
                history.push('/');
              })
              .catch((err) => console.log(err));
          }}
        >
          <div className="table">
            <div className="table-row">
              <div>이메일</div>
              <Input
                type="email"
                placeholder="이메일"
                onChange={this.handleInputValue('email')}
              />
            </div>
          </div>
          <div className="table-row">
            <div>비밀번호</div>
            <Input
              onChange={this.handleInputValue('password')}
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="table-row">
            <div>비밀번호 확인</div>
            <Input
              onChange={this.handleInputValue('password')}
              type="password"
              placeholder="비밀번호 확인"
            />
          </div>
          <div className="table-row">
            <div>이름</div>
            <Input
              onChange={this.handleInputValue('password')}
              type="text"
              placeholder="이름"
            />
          </div>
          <div className="btn-rayout">
            <Link to="/Login">
              <button type="button">취소</button>
            </Link>
            <Button text="회원가입" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({
      signupState: state.signup,
    }),
    (dispatch) => ({
      postSignup: bindActionCreators(actions, dispatch),
    }),
  )(Signup),
);
