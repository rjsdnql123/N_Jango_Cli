/* eslint-disable */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './pages/Header';
import Main from './pages/Main';
import Result from './pages/Result';
import Recipe from './pages/Recipe';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './mypage/Mypage';
import Loading from './pages/Loading';
import axios from 'axios';
import { fakeData } from './fakeData';
import { fakeData_r } from './fakeData_r';

class App extends React.Component {
  state = {
    isLogin: true,
    userinfo: {},
    stuff: fakeData,
    selectedStuff: [],
    recipe: fakeData_r,
    filteredRecipe: [],
    selectedRecipe: null,
    isLoading: true,
  };

  handleIsLoginChange() {
    this.setState({ isLogin: true });
    axios.get('http://localhost:4000/user').then((res) => {
      console.log(res.data);
      this.setState({ userinfo: res.data });
    });
  }

  searchStuff(e) {
    this.setState({ selectedStuff: e });
  }

  searchFilter() {
    const { recipe, selectedStuff } = this.state;
    const result = recipe.filter((rcp) =>
      selectedStuff.every((el) => rcp.stuff.includes(el)),
    );
    this.setState({ filteredRecipe: result });
  }

  routeRecipe(e) {
    const { recipe } = this.state;
    const result = recipe.filter((rcp) => rcp.id === e);
    this.setState({ selectedRecipe: result });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isLoading: !this.state.isLoading });
    }, 2000);
  }
  render() {
    const {
      isLogin,
      userinfo,
      stuff,
      selectedStuff,
      filteredRecipe,
      isLoading,
    } = this.state;
    console.log(isLogin, userinfo);
    return (
      <div className="root">
        {isLoading && <Loading isLoading={isLoading} />}
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
              <Result
                isLogin={isLogin}
                selectedStuff={selectedStuff}
                filteredRecipe={filteredRecipe}
                routeRecipe={this.routeRecipe.bind(this)}
              />
            )}
          />
          <Route
            exact
            path="/recipe/:id"
            render={(props) => (
              <Recipe
                isLogin={isLogin}
                selectedRecipe={fakeData_r[`${props.match.params.id}` - 1]}
              />
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
