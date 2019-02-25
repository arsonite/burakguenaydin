import React from 'react';

import Navigation from './navigation';

import { nav } from '../../config.json';

import './style/navBar.css';

function NavBar(props) {
  return (
    <nav className={props.scrollOffset ? 'scrollOffset' : ''}>
      {Object.keys(nav).map((key, i) => {
        return (
          <Navigation
            key={key}
            name={key}
            imgURL={!Array.isArray(nav[key]) ? nav[key] : undefined}
            isPlaceholder={nav[key] === ''}
            selected={i === props.navigationIndex}
            scrollOffset={props.scrollOffset}
          />
        );
      })}
    </nav>
  );
}

export default NavBar;
