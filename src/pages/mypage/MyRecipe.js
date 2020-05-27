import React from 'react';
import { withRouter } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard';

import './MyRecipe.css';

const MyRecipe = ({ recipes }) => (
  <div className="myRecipe">
    {recipes.map((el) => {
      const { id, name, stuff, image } = el;
      return (
        <RecipeCard
          key={`${el.id}-${el.username}-${el.name}`}
          id={id}
          name={name}
          stuff={stuff}
          image={image}
        />
      );
    })}
  </div>
);

export default withRouter(MyRecipe);
