import React from 'react';
import { Link } from 'react-router-dom';

import { url } from '../../config.json';

import './style/navigation.css';

function Navigation(props) {
  const name =
    props.name.substring(0, 1).toUpperCase() +
    props.name.substring(1, props.name.length);

  const selected = props.selected;

  return (
    <Link
      to={`/${name.toLowerCase()}`}
      id={`nav_${name}`}
      className={`navigation${props.scrollOffset ? ' scrollOffset' : ''}${
        selected ? ' current' : ''
      }`}
    >
      {props.imgURL !== undefined ? (
        <img
          src={
            window.location.origin +
            '/' +
            (selected ? props.imgURL.replace(/\.svg/g, '_s.svg') : props.imgURL)
          }
          alt=""
        />
      ) : (
        name
      )}
    </Link>
  );
}

export default Navigation;
