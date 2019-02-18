import React from 'react';

import Navigation from './navigation';

import { url } from '../../config.json';

import './style/navBar.css';

function NavBar(props) {
  return (
    <nav className={props.scrollOffset ? 'scrollOffset' : ''}>
      {Object.keys(url).map((key, i) => {
        const isImage = !Array.isArray(url[key]);

        return (
          <Navigation
            key={key}
            name={key}
            imgURL={isImage ? url[key] : undefined}
            selected={i === props.navigationIndex}
            scrollOffset={props.scrollOffset}
          />
        );
      })}
    </nav>
  );
}

export default NavBar;
