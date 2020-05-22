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

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: '',
    };
  }

  render() {
    const { history, selectedStuff, filteredRecipe } = this.props;
    const result = this.props.filteredRecipe.length;
    const filterText = selectedStuff.sort().join(', ');
    return (
      <div>
        <div
          className="recipe-list"
          style={{
            width: '30%',
            borderStyle: 'double',
            margin: '2% auto',
            padding: '1%',
            backgroundColor: '#92a8d1',
            overflow: 'hidden',
          }}
        >
          <div style={{
            fontSize: '1.7rem', whiteSpace: 'nowrap',
          }}
          >
            레시피 검색 결과
            <span style={{
              fontSize: '1rem', paddingLeft: '1%',
            }}
            >
              (
              {result}
              건)
            </span>
            <span style={{
              fontSize: '1rem', paddingLeft: '1%', color: 'blue'
            }}>filtered : {filterText}</span>
          </div>
          <br />
          <ul style={{
            width: '100%',
            listStyle: 'none',
            margin: '0',
            padding: '0',
            float: 'left',
          }}
          >
            { filteredRecipe.map((rcp) => {
              return (
                <li style={{
                  whiteSpace: 'nowrap', overflow: 'hidden', padding: '3%',
                }}
                >
                  <img src={rcp.image} width="100px" height="100px" style={{ float: 'left', paddingRight: '2%' }} alt="" />
                  <Link to={`/recipe/${rcp.id}`}>{rcp.name}</Link>
                  <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {rcp.description}
                  </div>
                </li>
              );
            }) }
          </ul>
        </div>
        <img
          name="backbtn"
          src="https://vectorified.com/images/go-back-icon-31.png"
          style={{
            width: '5%',
            height: '10%',
            cursor: 'pointer',
            position: 'fixed',
            bottom: '1%',
            right: '1%',
          }}
          onClick={function(){history.goBack()}}
        />
      </div>
    );
  }
}

export default withRouter(Result);
