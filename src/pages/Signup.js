/* eslint-disable */
import React from 'react';
import { withRouter, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    const { email, password, mobile, username } = this.state;
    return (
      <div>
        <center>
        <h1>Njango</h1>
          <h2>Sign Up</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동 하세요.
              axios
                .post('http://localhost:4000/signup', {
                  email: email,
                  password: password,
                  username: username,
                  mobile: mobile
                })
                .then(res => {
                  this.props.history.push('/');
                })
                .catch(err => console.log(err));
            }}
          >
            <table>
            <tr>
            <td>아이디</td>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                type="text"
                placeholder="아이디"
                onChange={this.handleInputValue('email')}
              ></input>
            </tr>
            <tr>
            <td>비밀번호</td>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                onChange={this.handleInputValue('password')}
                type="password"
                placeholder="비밀번호"
              ></input>
            </tr>
            <tr>
            <td>비밀번호 확인</td>
              <input
                  style={{
                    width: '400px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  onChange={this.handleInputValue('password')}
                  type="password"
                  placeholder="비밀번호 확인"
                ></input>
            </tr>
            <tr>
              <td>이름</td>
              <input
                  style={{
                    width: '400px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  onChange={this.handleInputValue('password')}
                  type="text"
                  placeholder="이름"
                ></input>
            </tr>
            <tr>
              <td>이메일</td>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                type="email"
                placeholder="이메일"
                onChange={this.handleInputValue('email')}
              ></input>
            </tr>
            </table>
            <Link to="/Login">
                <button >취소</button>
              </Link>
            <button
              style={{
                width: '200px',
                height: '30px',
                margin: '5px',
                borderRadius: '5px',
                backgroundColor: 'orange'
              }}
              type="submit"
            >
              회원가입
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Signup);
