import React from 'react';
const FormCheckBox = (props) => (

  <div className="checkbox">
    <span className="conditions">{props.name}</span>
    <label>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={props.checked}
        onChange={props.handleChange}
        name={props.name}
        title={props.title}
      />
      <span
        className="checkbox-span"
      />
      <div className={props.className}>{props.title}<a href={props.href} target="_blank">{props.link}</a></div>
    </label>
  </div>
)


export default FormCheckBox;