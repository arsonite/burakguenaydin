import React, { Component } from 'react';

import ListCard from '../common/listCard';

import { software_portfolio, proficiency_strings } from '../../config.json';

import './style/softwareScreen.css';

class SoftwareScreen extends Component {
  _isMounted = false; //Preventing setState() memory leak

  state = {};

  componentDidMount() {
    this.props.updateNavigationIndex(this.props.navigationIndex);
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const arr = software_portfolio.languages;

    return (
      <div id="softwareScreen" className="screen">
        <span>Languages that I write in</span>
        {Object.keys(arr).map(language => {
          return (
            <ListCard
              key={language}
              title={language}
              proficiency={proficiency_strings[arr[language].proficiency]}
              list={arr[language].projects}
            />
          );
        })}
        <span>Other projects</span>
      </div>
    );
  }
}
export default SoftwareScreen;
