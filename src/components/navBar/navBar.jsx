import React from 'react';

import Navigation from './navigation';

import { url } from '../../config.json';

import './style/navBar.css';

function NavBar(props) {
  return (
    <nav>
      {Object.keys(url).map((key, i) => {
        const isImage = !Array.isArray(url[key]);

        return (
          <Navigation
            key={key}
            name={key}
            imgURL={isImage ? url[key] : undefined}
            selected={i === props.navigationIndex}
          />
        );
      })}
    </nav>
  );
}

export default NavBar;
