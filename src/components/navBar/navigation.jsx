import React from 'react';
import { Link } from 'react-router-dom';

import { url } from '../../config/URL.json';

import './style/navigation.css';

//const imgURL = window.location.origin + '/img/nav/';

function Navigation(props) {
  let name = props.name.replace(/_/g, ' ');
  name = name.substring(0, 1).toUpperCase() + name.substring(1, name.length);

  return (
    <Link
      to={url[`${props.name}`]}
      id={`nav_${props.name}`}
      className={`navigation${props.selected ? ' current' : ''}`}
    >
      <p>{name}</p>
    </Link>
  );
}

export default Navigation;
