import React from 'react';
import { Link } from 'react-router-dom';

import { url } from '../../config.json';

import './style/navigation.css';

function Navigation(props) {
  // TODO: Write a better, single line regex
  let name = props.name.replace(/img\//g, '').replace(/.svg/g, '');
  name = name.substring(0, 1).toUpperCase() + name.substring(1, name.length);

  return (
    <Link
      to={`/${name.toLowerCase()}`}
      id={`nav_${name}`}
      className={`navigation${props.selected ? ' current' : ''}`}
    >
      {props.isImage ? (
        <img src={`${window.location.origin}/${props.name}`} alt="" />
      ) : (
        <p>{name}</p>
      )}
    </Link>
  );
}

export default Navigation;
