import React from 'react';
import { Link } from 'react-router-dom';

import './style/navigation.css';

const IMG_URL = window.location.origin + '/';

function Navigation(props) {
  const name =
    props.name.substring(0, 1).toUpperCase() +
    props.name.substring(1, props.name.length);

  const scrollOffset = props.scrollOffset;
  const isSelected = props.selected;

  return (
    <Link
      to={'/' + name.toLowerCase()}
      id={`nav_${name}`}
      className={`navigation
      ${scrollOffset ? ' scrollOffset' : ''}
      ${isSelected ? ' current' : ''}`}
    >
      {props.imgURL !== undefined ? (
        <img
          src={
            IMG_URL +
            (isSelected || onmouseenter
              ? props.imgURL.replace(/\.svg/g, '_s.svg')
              : props.imgURL)
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
