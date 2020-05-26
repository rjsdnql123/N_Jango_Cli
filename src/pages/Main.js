/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter } from 'react-router-dom';

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
            <div
              className="stuff-list"
              style={{
                width: '30%',
                borderStyle: 'double',
                margin: '2% auto',
                padding: '1%',
                backgroundColor: '#92a8d1',
                whiteSpace: 'pre-line',
              }}
            >
              <div
                style={{
                  fontSize: '1.7rem',
                }}
              >
                재료 목록
                <button
                  className="stfaddbtn"
                  style={{
                    margin: '0.2% 2%',
                    borderRadius: '8%',
                    backgroundColor: '#BBDEFB',
                  }}
                  type="button"
                >
                  추가
                </button>
              </div>
              <br />
              {stuff.map((stf) => (
                <label>
                  <input
                    type="checkbox"
                    name="my_stuff"
                    value={stf.stuff_name}
                    onChange={this.onChange.bind(this)}
                  />
                  {stf.stuff_name}
                  <img src={stf.icon} width="30px" height="30px" alt="" />
                </label>
              ))}
            </div>
            <button
              name="searchbtn"
              type="submit"
              style={{
                width: '10%',
                maxWidth: '150px',
                margin: '0.4%',
                borderRadius: '8%',
                fontSize: '2rem',
                padding: '0.5%',
                backgroundColor: 'skyblue',
              }}
            >
              search
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Main);
