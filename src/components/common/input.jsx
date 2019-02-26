import React from 'react';

import './style/input.css';

function Input(props) {
  return (
    <div className="input">
      {props.label !== undefined ? <span /> : null}
      <input
        id={props.id}
        className={props.className}
        onChange={props.onChange}
        name={props.name}
        placeholder={
          props.placeholder !== undefined
            ? props.placeholder
            : props.name !== undefined
            ? 'Enter ' + props.name
            : null
        }
        type={props.type !== undefined ? props.type : 'text'}
        required={props.required !== undefined ? props.required : false}
      />
    </div>
  );
}

export default Input;
