import React from 'react';

import Navigation from './navigation';

import { url } from '../../config.json';

import './style/navBar.css';

function NavBar(props) {
  let selectIndex = props.selectIndex;

  return (
    <nav>
      {Object.keys(url).map((key, i) => {
        return (
          <Navigation
            key={key}
            name={key}
            selected={i === selectIndex}
            isImage={key.includes('img')}
          />
        );
      })}
    </nav>
  );
}

export default NavBar;
