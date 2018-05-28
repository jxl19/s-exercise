import React from 'react'; 
import './FormInput.css';
const FormInput = (props) => (
    <div className="form-group">
        <label htmlFor="form-label">{props.title}<span className="form-condition">{props.condition}</span></label>
        <input 
            className={props.className}
            onBlur={props.onBlur}
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunction}
            placeholder={props.placeholder}/>
        <div className={props.showError}>{props.errorMessage}</div>
    </div>
)

export default FormInput;