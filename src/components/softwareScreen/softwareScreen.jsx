import React, { Component } from 'react';

import ListCard from '../common/listCard';

import skillService from '../../services/skills';

import { proficiency_strings } from '../../config.json';

import './style/softwareScreen.css';

class SoftwareScreen extends Component {
  _promiseResolved = false; //Preventing setState() memory leak
  _isMounted = false; //Preventing setState() memory leak

  state = {
    skills: undefined,
    promiseResolved: false
  };

  async componentDidMount() {
    this.props.updateNavigationIndex(this.props.navigationIndex);
    this._isMounted = true;

    const skills = await skillService.getSkills().execute();
    this.setState({ skills: skills, promiseResolved: true }, () => {
      console.log(skills);
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (!this.state.promiseResolved) return null;
    const arr = this.state.skills;

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
