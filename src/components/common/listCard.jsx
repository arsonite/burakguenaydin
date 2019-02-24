import React from 'react';

import Card from './card';

import './style/listCard.css';

const IMG_URL = window.location.origin + '/';

class ListCard extends Card {
  state = {
    selected: false
  };

  render() {
    const selected = this.state.selected;

    return (
      <div className={`listCard${selected ? ' selected' : ''}`}>
        <div className="title">
          <p>{this.props.title}</p>
          <div
            onClick={() => {
              this.setState({ selected: !selected });
            }}
          >
            <img src={IMG_URL + 'img/arrow.svg'} alt="" />
          </div>
        </div>

        <div className="content">
          <ul>
            <li
              className={`proficiency ${this.props.proficiency.toLowerCase()}`}
            >
              <b>Proficiency: </b>
              {this.props.proficiency}
            </li>
            <li>
              <b>Projects:</b>
            </li>
            {this.props.list.map(entry => {
              return (
                <li key={entry} className="entry">
                  {entry}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
//<div className="linker">{'To projects'}</div>
export default ListCard;
