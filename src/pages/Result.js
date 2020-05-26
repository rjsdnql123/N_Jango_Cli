/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Recipe.css';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: '',
    };
  }

  render() {
    const {
      history, selectedStuff, filteredRecipe, routeRecipe } = this.props;
    const result = filteredRecipe.length;
    const filterText = selectedStuff.sort().join(', ');
    return (
      <div>
        <div className="page-layout">
          {(filteredRecipe.length < 1) ? (
            <center>레시피 검색 결과가 없습니다
              <p>
                <Link to="/" className="not-found-back">
                  Back
              </Link>
              </p>
            </center>
          ) : (
              <>
                <div className="page-title">
                  레시피 검색 결과
              <span className="result-count">
                    ({result}건)
              </span>
                  <span className="selected-stuff">
                    filtered : {filterText}
                  </span>
                </div>
                <br />
                <ul className="recipe-list">
                  {filteredRecipe.map((rcp, idx) => (
                    <li className="recipe" key={idx}>
                      <img className="recipe-list-img" src={rcp.image} alt="" />
                      <Link to={`/recipe/${rcp.id}`} onClick={function r() { routeRecipe(rcp.id); }}>
                        {rcp.name}
                      </Link>
                      <div className="recipe-list-desc">
                        {rcp.description}
                      </div>
                    </li>
                  ))}
                </ul>
                <img className="back-btn" src="https://vectorified.com/images/go-back-icon-31.png"
                  onClick={function back() { history.goBack(); }} alt="" />
              </>
            )}
        </div>
      </div>
    );
  }
}

export default withRouter(Result);
