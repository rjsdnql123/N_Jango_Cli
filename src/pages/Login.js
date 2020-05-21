/* eslint-disable */
import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import "./Login.css"

axios.defaults.withCredentials = true;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    const { email, password } = this.state;
    const { handleIsLoginChange } = this.props;
    return (
      <div>
        <center>
        <h1>Njango</h1>
          <h2>Sign In</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              // TODO : 서버에 로그인 요청 후 처리하세요.
              return axios
                .post('http://localhost:4000/signin', {
                  email: email,
                  password: password
                })
                .then(() => {
                  handleIsLoginChange();
                  this.props.history.push('/');
                })
                .catch(err => console.log(err));
            }}
          >
            <div>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                type="email"
                placeholder="아이디"
                onChange={this.handleInputValue('email')}
              ></input>
            </div>
            <div>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
                type="password"
                placeholder="비밀번호"
                onChange={this.handleInputValue('password')}
              ></input>
            </div>
            
            <button
              style={{
                width: '400px',
                height: '30px',
                margin: '5px',
                borderRadius: '5px',
                backgroundColor: 'orange'
              }}
              type="submit"
            >
              로그인
            </button>
            <div>
            <span >
              <Link to="/">
                <button >메인페이지</button>
              </Link>
            </span>
            <span >
              <Link to="/signup">
                <button >회원가입하기</button>
              </Link>
            </span>
            </div>
            
        
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Login);
