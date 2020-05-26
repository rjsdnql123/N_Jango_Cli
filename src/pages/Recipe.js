/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter } from 'react-router-dom';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: null,
    };
  }

  render() {
    const { selectedRecipe, history, match } = this.props;
    const {
      name, image, user, stuff, description, like,
    } = selectedRecipe;
    const stflist = stuff.join(', ');
    const step = description.split('\n');
    return (
      <div>
        <div
          className="recipe_info"
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
            레시피 정보 = {match.params.id}
          </div>
          <div className="recipe_detail" style={{ paddingTop: '5%' }}>
            {/* recipe id : {id} */}
            <img className="image" width="100%" height="100%" src={image} style={{ maxHeight: '400px' }} alt="" />
            <div name="default" style={{ margin: '1.5% auto', textAlign: 'center' }}>
              <span
                className="title"
                style={{
                  fontSize: '1.5rem', padding: '1%',
                }}
              >{name}
              </span>
              <button
                type="button"
                style={{
                  backgroundColor: 'coral', color: 'white', cursor: 'pointer', textDecoration: 'none', borderRadius: '15%',
                }}
              >♥&nbsp;{like}
              </button>
            </div>
            <div name="user" style={{ margin: '1.5% auto', textAlign: 'center' }}>
              <button
                className="user"
                type="button"
                style={{
                  width: '12%', padding: '1%', backgroundColor: '#455f91', borderRadius: '15%', cursor: 'pointer', margin: '0 auto', textAlign: 'center',
                }}
              >
                <img
                  src="https://vectorified.com/images/person-icon-white-40.png"
                  width="15px"
                  height="15px"
                  style={{ paddingLeft: '1%', float: 'left' }}
                  alt=""
                /><span style={{ color: 'white' }}>{user}</span>
              </button>
            </div>
            {/* <button id="follow" onclick={() => follow(user)}>follow</button> */}
            <br />
            <div className="stuff" style={{ clear: 'both' }}>
              <div style={{
                width: 'max-content', padding: '1%', backgroundColor: 'skyblue', borderRadius: '15%', marginBottom: '1%', float: 'left',
              }}
              >재료
              </div>
              <p style={{ float: 'left', margin: '1%' }}>{stflist}</p>
            </div>
            <div
              className="description"
              style={{
                width: '100%', margin: '4% 0', clear: 'both', display: 'inline-table',
              }}
            >
              <div
                className="desc_title"
                style={{
                  width: 'max-content', padding: '1%', backgroundColor: 'skyblue', borderRadius: '15%',
                }}
              >요리 과정
              </div>
              <br />
              <ol
                className="step_list"
                style={{
                  width: '90%', height: '200px', marginTop: '0', overflowY: 'scroll',
                }}
              >
                {step.map((e) => (
                  <li style={{ lineHeight: '150%' }}>
                    {e}
                  </li>
                ))}
              </ol>
            </div>
          </div>
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
          onClick={function back() { history.goBack(); }}
          alt=""
        />
      </div>
    );
  }
}

export default withRouter(Recipe);