/* eslint-disable react/no-did-update-set-state */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './Recipe.css';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: null,
    };
  }

  render() {
    const { selectedRecipe, history } = this.props;
    const { name, username, image, stuff, description, likeCount } = selectedRecipe;
    const stflist = stuff.join(', ');
    const step = description.split('\n');
    return (
      <div>
        <div className="page-layout">
          <div className="page-title">
            레시피 정보
          </div>
          <div className="recipe-contents">
            <img className="recipe-img" src={image} alt="" />
            <div className="recipe-title">
              <span className="recipe-name">{name}</span>
              <button className="like-btn" type="button">
               ♥&nbsp;{likeCount}
              </button>
            </div>
            <div className="recipe-user">
              <button className="user-follow-btn" type="button">
                <img className="user-icon" src="https://vectorified.com/images/person-icon-white-40.png" alt="" />
                <span className="user-name">{username}</span>
              </button>
            </div>
            <br />
            <div className="recipe-stuff">
              <div className="recipe-stuff-title">재료</div>
              <p className="recipe-stuff-list">{stflist}</p>
            </div>
            <div className="recipe-desc">
              <div className="recipe-desc-title">요리 과정</div>
              <br />
              <ol className="recipe-desc-list">
                {step.map((e) => (
                  <li className="recipe-desc-step">
                    {e}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <button className="review-btn" type="button">
            리뷰 보기
          </button>
        </div>
        <img className="back-btn" src="https://vectorified.com/images/go-back-icon-31.png"
          onClick={function back() { history.goBack(); }} alt="" />
      </div>
    );
  }
}

export default withRouter(Recipe);
