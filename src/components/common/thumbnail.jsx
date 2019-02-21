import React, { Component } from 'react';

import './style/thumbnail.css';

class Thumbnail extends Component {
  state = {};

  render() {
    return (
      <div className="thumbnail">
        <div className="image">
          <img src={this.props.src} alt="" />
        </div>

        <div className="information">
          <div className="text">
            <div className="title">Title</div>
            <div className="content">
              Adipiscing elit sed diam nonummy nibh euismod tincidunt ut. Quis
              nostrud exerci, tation ullamcorper suscipit lobortis nisl.
              Anteposuerit litterarum formas humanitatis per seacula quarta
              decima et quinta decima eodem modo; typi qui nunc.
            </div>
          </div>

          <div className="linker">{'Explore >'}</div>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
