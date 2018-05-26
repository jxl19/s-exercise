import React from 'react'; 

const FormInput = (props) => (
    <div className="form-group">
        <label htmlFor="form-label">{props.title}</label>
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