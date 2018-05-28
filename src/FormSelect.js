import React from 'react';
import './FormSelect.css';
const FormSelect = (props) => (

    <div className="btn-group dropup">
        <div className="selection-title">{props.selectionTitle}</div>
        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className={props.className}>{props.optionSelect ? props.optionSelect : props.placeholder}</span>
</button>
        <div className="dropdown-menu dropdown-menu-right">
            {props.options.map(opt => {
                return (
                    <button onClick={props.controlFunction} className="dropdown-item"
                        type={"button"}
                        key={opt}
                        value={opt}>{opt}</button>
                );
            })}
        </div>
    </div>
)
export default FormSelect;