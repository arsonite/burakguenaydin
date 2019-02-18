import React from 'react';
import { Link } from 'react-router-dom';

import './style/navigation.css';

function Navigation(props) {
  const name =
    props.name.substring(0, 1).toUpperCase() +
    props.name.substring(1, props.name.length);

  const isSelected = props.selected;
  const isHome = props.imgURL !== undefined;
  const isPlaceholder = props.name === 'placeholder';

  return (
    <Link
      to={isPlaceholder ? '#' : '/' + name.toLowerCase()}
      id={`nav_${name}`}
      className={`navigation
      ${isPlaceholder ? ' placeholder' : ''}
      ${isHome ? ' home' : ''}
      ${props.scrollOffset ? ' scrollOffset' : ''}
      ${isSelected ? ' current' : ''}`}
    >
      {isHome ? (
        <img
          src={
            window.location.origin +
            '/' +
            (isSelected
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
