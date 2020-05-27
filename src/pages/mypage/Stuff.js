/* eslint-disable */
import React from "react";
import Mystuff from "./mystuff";
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { fakeData_stuff } from './fakeData_stuff';
import "./Stuff.css"

class Stuff extends React.Component {
  state = {
    stuff: []
  };
  // getStuff = async () => {
  //   const { data: {
  //     stuff },
  //   } = await axios.get("");
  //   this.setState({ stuff });
  // };

  // componentDidMount() {
  //   this.getStuff();
  // }
  render() {
    //const { stuff } = require('./fakeData_stuff')
    return (
      <div>
        <center>
          <div className="stuff-layout">
            {fakeData_stuff.map((mystuff) => (
              <Mystuff
                id={mystuff.id}
                stuffname={mystuff.stuffname}
                limitday={mystuff.limitday}
                category_id={mystuff.category_id}
                category_name={mystuff.category_name}
                icon={mystuff.icon}
              />
            ))}
          </div>
        </center>
      </div>
    )
  }
}
export default Stuff;
