/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from 'react-router-dom';

import Header from './pages/Header';
import Main from './pages/Main';
import Result from './pages/Result';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Mypage } from './pages/Mypage';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLogin: false,
    userinfo: {},
    stuff: null/*fakeData*/,
    selectedStuff: [],
    recipe: null/*fakeData_r*/,
    filteredRecipe: [],
    selectedRecipe: null
  };

  handleIsLoginChange() {
    this.setState({ isLogin: true });
    axios.get('http://localhost:4000/user').then(res => {
      console.log(res.data);
      this.setState({ userinfo: res.data });
    });
  }

  searchStuff(e) {
    this.setState({ selectedStuff: e });
  }

  searchFilter() {
    const { recipe, selectedStuff } = this.state;
    const result = recipe.filter(rcp => selectedStuff.every( el => rcp.stuff.includes(el) ))
    this.setState({filteredRecipe: result});
  }

  render() {
    const { isLogin, userinfo, stuff, selectedStuff, filteredRecipe } = this.state;
    console.log(isLogin, userinfo);
    return (
      <div>
        <Header isLogin={isLogin} />
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login
                isLogin={isLogin}
                handleIsLoginChange={this.handleIsLoginChange.bind(this)}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={() => <Signup isLogin={isLogin} />}
          />
          <Route
            exact
            path="/mypage"
            render={() => <Mypage isLogin={isLogin} userinfo={userinfo} />}
          />
          <Route
              path="/recipe/search"
              render={() => (
                <Result isLogin={isLogin} selectedStuff={selectedStuff}
                filteredRecipe={filteredRecipe}/>
              )}
            />
          <Route
              path="/"
              exact
              render={() => (
                <Main
                  isLogin={isLogin}
                  stuff={stuff}
                  selectedStuff={selectedStuff}
                  searchStuff={this.searchStuff.bind(this)}
                  searchFilter={this.searchFilter.bind(this)}
                />
              )}
            />
        </Switch>
      </div>
    );
  }
}
export default App;
