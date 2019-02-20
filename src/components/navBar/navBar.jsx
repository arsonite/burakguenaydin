import React from 'react';

import Navigation from './navigation';

import { url } from '../../config.json';

import './style/navBar.css';

function NavBar(props) {
  return (
    <nav className={props.scrollOffset ? 'scrollOffset' : ''}>
      {Object.keys(url).map((key, i) => {
        return (
          <Navigation
            key={key}
            name={key}
            imgURL={!Array.isArray(url[key]) ? url[key] : undefined}
            isPlaceholder={url[key].length === 0}
            selected={i === props.navigationIndex}
            scrollOffset={props.scrollOffset}
          />
        );
      })}
    </nav>
  );
}

export default NavBar;
