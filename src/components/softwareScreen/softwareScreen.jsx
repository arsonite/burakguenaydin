import React, { Component } from 'react';

import ListCard from '../common/listCard';

import skillsService from '../../services/skillsService';

import { proficiencyStrings } from '../../config.json';

import './style/softwareScreen.css';

class SoftwareScreen extends Component {
  _isMounted = false; //Preventing setState() memory leak

  state = {
    skills: undefined,
    promiseResolved: false
  };

  async componentDidMount() {
    this.props.updateNavigationIndex(this.props.navigationIndex);
    this._isMounted = true;

    const skills = await skillsService.getSkills().execute();
    this.setState({ skills: skills.data, promiseResolved: true }, () => {
      console.log('Promise resolved.');
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (!this.state.promiseResolved) return null;
    const softwareLanguages = this.state.skills;

    return (
      <div id="softwareScreen" className="screen">
        <div className="container white">
          <div />
          <div />
        </div>

        <div className="container grey">
          <div />
          <div />
        </div>

        <div className="box">
          <span>Languages that I write in</span>
          {Object.keys(softwareLanguages).map(index => {
            const softwareLanguage = softwareLanguages[index];
            return (
              <ListCard
                key={index}
                title={softwareLanguage.name}
                proficiency={proficiencyStrings[softwareLanguage.proficiency]}
                list={softwareLanguage.projects}
              />
            );
          })}
          <span>Other projects</span>
        </div>
      </div>
    );
  }
}
export default SoftwareScreen;
