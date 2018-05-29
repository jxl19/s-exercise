import React from 'react';
import './FormCheckBox.css';
const FormCheckBox = (props) => (

  <div className="checkbox">
    <span className="conditions">{props.title}</span>
    <label>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={props.checked}
        onChange={props.handleChange}
      />
      <span
        className="checkbox-span"
      />
      <div className={props.className}>{props.content}<a href={props.href} target="_blank">{props.link}</a></div>
    </label>
  </div>
)


export default FormCheckBox;