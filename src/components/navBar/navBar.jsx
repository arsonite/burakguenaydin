import React from 'react';

import Navigation from './navigation';

import { keys } from '../../config/nav.json';

import './style/navBar.css';

function NavBar(props) {
  let selectIndex = props.selectIndex;

  return (
    <nav>
      {keys.map((key, i) => {
        return (
          <Navigation
            key={key}
            name={key}
            selected={i === selectIndex}
            isImage={key.includes('*')}
          />
        );
      })}
    </nav>
  );
}

export default NavBar;
