import React from 'react';

import Navigation from './navigation';

import './style/navBar.css';

import { keys } from '../../config/nav.json';

function NavBar(props) {
  let selectIndex = props.selectIndex;

  return (
    <nav>
      {keys.map((key, i) => {
        return <Navigation key={key} name={key} selected={i === selectIndex} />;
      })}
    </nav>
  );
}

export default NavBar;
