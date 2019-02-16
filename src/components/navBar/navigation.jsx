import React from 'react';
import { Link } from 'react-router-dom';

import { url } from '../../config/URL.json';

import './style/navigation.css';

//const imgURL = window.location.origin + '/img/nav/';

function Navigation(props) {
  return (
    <Link
      to={url[`${props.name}`]}
      id={`nav_${props.name}`}
      className={`navigation${props.selected ? ' current' : ''}`}
    >
      <p>{props.name}</p>
    </Link>
  );
}

export default Navigation;

/*
<img
  src={imgURL + (props.selected ? 's_' : '') + `${props.name}.svg`}
  alt=""
/>
*/
