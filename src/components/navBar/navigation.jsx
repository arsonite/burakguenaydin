import React from 'react';
import { Link } from 'react-router-dom';

import { url } from '../../config.json';

import './style/navigation.css';

function Navigation(props) {
  const name =
    props.name.substring(0, 1).toUpperCase() +
    props.name.substring(1, props.name.length);

  return (
    <Link
      to={`/${name.toLowerCase()}`}
      id={`nav_${name}`}
      className={`navigation${props.selected ? ' current' : ''}`}
    >
      {props.isImage ? (
        <img
          src={
            window.location.origin +
            '/' +
            (props.selected ? name.replace(/\.svg/g, '_s.svg') : name)
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
