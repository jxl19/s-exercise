import React from 'react'; 

const FormInput = (props) => (
    <div className="form-group">
        <label htmlFor="form-label">{props.title}</label>
        <input 
            className="form-control"
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunction}
            placeholder={props.placeholder}/>
    </div>
)

export default FormInput;