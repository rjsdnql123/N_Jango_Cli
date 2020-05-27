import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './RecipeCard.css';

const RecipeCard = ({ id, name, stuff, image, history }) => (
  <div
    className={id % 2 ? 'odd recipeCard' : 'even recipeCard'}
    onClick={() => history.push(`/recipe/${id}`)}
  >
    <img src={image} alt={name} />
  </div>
);

RecipeCard.prototype = {};
export default withRouter(RecipeCard);
