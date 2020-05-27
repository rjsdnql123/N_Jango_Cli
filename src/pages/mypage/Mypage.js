/* eslint-disable */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MypageAction from './../../modules/mypage';
import Header from './Header';
import Stuff from './Stuff';
import MyRecipe from './MyRecipe';
import Like from './Like';
import Follow from './Follow';
import Comment from './Comment';
import Loading from '../../components/Loading';

class mypage extends Component {
  componentDidMount = () => {
    const {
      mypageActions: { fakeAPI },
    } = this.props;
    console.log(fakeAPI);
    fakeAPI();
  };
  render() {
    const {
      mypageState: {
        pending,
        userinfo: { stuffs, recipes, likes, followings, followers, comments },
      },
    } = this.props;
    console.log(recipes);
    return (
      <>
        {pending && <Loading isLoading={true} />}
        <div>
          <Header />
          <Route path="/mypage" exact component={Stuff} />
          <Route
            path="/mypage/recipe"
            render={() => <MyRecipe recipes={recipes} />}
          />
          <Route path="/mypage/like" component={Like} />
          <Route path="/mypage/follow" component={Follow} />
          <Route path="/mypage/comment" component={Comment} />
        </div>
      </>
    );
  }
}
export default withRouter(
  connect(
    (state) => ({
      mypageState: state.mypage,
    }),
    (dispatch) => ({
      mypageActions: bindActionCreators(MypageAction, dispatch),
    }),
  )(mypage),
);
