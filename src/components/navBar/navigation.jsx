import React from 'react';
import { Link } from 'react-router-dom';

import './style/navigation.css';

const IMG_URL = window.location.origin + '/';

function Navigation(props) {
  const name =
    props.name.substring(0, 1).toUpperCase() +
    props.name.substring(1, props.name.length);

  const isSelected = props.selected;
  const isPlaceholder = props.isPlaceholder;

  return (
    <Link
      to={isPlaceholder ? '#' : '/' + name.toLowerCase()}
      id={`nav_${name}`}
      className={`navigation
      ${isPlaceholder ? ' placeholder' : ''}
      ${props.scrollOffset ? ' scrollOffset' : ''}
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
      ) : isPlaceholder ? (
        ''
      ) : (
        name
      )}
    </Link>
  );
}

export default Navigation;
