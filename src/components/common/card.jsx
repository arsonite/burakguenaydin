import React, { Component } from 'react';

import './style/card.css';

const IMG_URL = window.location.origin + '/';

class Card extends Component {
  state = {
    selected: false
  };

  render() {
    const selected = this.state.selected;

    return (
      <div className="container">
        <div className={`card${selected ? ' selected' : ''}`}>
          <div className="title">
            <p>Title</p>
            <div
              onClick={() => {
                this.setState({ selected: !selected });
              }}
            >
              <img src={IMG_URL + 'img/arrow.svg'} alt="" />
            </div>
          </div>
          <div className="image">
            <img src={this.props.src} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
