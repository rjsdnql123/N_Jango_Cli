/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stuffAction from '../modules/stuff';
import { fakeData } from '../fakeData';
import './Recipe.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stuff: [] };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({ stuff: fakeData });
  }

  onChange(e) {
    const {
      stuffActions: { toggleSelectStuff },
    } = this.props;
    toggleSelectStuff(e.target.value);

    // const { selectedStuff } = this.state;
    // const { searchStuff } = this.props;
    // const val = e.target.value;
    // const chk = e.target.checked;
    // if (chk) {
    //   selectedStuff.push(val);
    // } else {
    //   selectedStuff.splice(selectedStuff.indexOf(val), 1);
    // }
    // this.setState({ selectedStuff });
    // searchStuff(selectedStuff);
  }

  render() {
    const {
      history,
      stuffState: { selectStuff },
    } = this.props;
    const { stuff } = this.state;

    return (
      <div className="main">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!selectStuff[0]) {
              return alert('재료를 선택해 주세요');
            }
            history.push('/recipe/search');
          }}
        >
          <div className="page-layout">
            <div className="page-title">재료 목록</div>
            <div className="stuff-list">
              {stuff.map((stf) => (
                <label key={stf.stuff_name}>
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
            <button className="stuff-add-btn" type="button">
              추가
            </button>
          </div>
          <div className="search-btn-rayout">
            <button className="search-btn" type="submit">
              search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(
  connect(
    (state) => ({
      stuffState: state.stuff,
    }),
    (dispatch) => ({
      stuffActions: bindActionCreators(stuffAction, dispatch),
    }),
  )(Main),
);
