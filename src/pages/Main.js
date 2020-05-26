/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './Recipe.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStuff: [],
    };
  }

  onChange(e) {
    const { selectedStuff } = this.state;
    const { searchStuff } = this.props;
    const val = e.target.value;
    const chk = e.target.checked;
    if (chk) {
      selectedStuff.push(val);
    } else {
      selectedStuff.splice(selectedStuff.indexOf(val), 1);
    }
    this.setState({ selectedStuff });
    searchStuff(selectedStuff);
  }

  render() {
    const { selectedStuff } = this.state;
    const { stuff, history, searchFilter } = this.props;
    return (
      <div>
        <center>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!selectedStuff[0]) {
                return alert('재료를 선택해 주세요');
              }
              searchFilter();
              history.push('/recipe/search');
            }}
          >
            <div className="page-layout">
              <div className="page-title">
                재료 목록
                <button className="stuff-add-btn" type="button">
                  추가
                </button>
              </div>
              <br />
              <div className="stuff-list">
                {stuff.map((stf, idx) => (
                  <label key={idx}>
                    <input
                      type="checkbox"
                      name="check-stuff"
                      value={stf.stuff_name}
                      onChange={this.onChange.bind(this)}
                    />
                    {stf.stuff_name}
                    <img className="stuff-icon" src={stf.icon} alt="" />
                  </label>
                ))}
              </div>
            </div>
            <button className="search-btn" type="submit">
              search
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Main);
