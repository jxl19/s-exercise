import React from 'react';
class FormCheckBox extends React.Component {
    static defaultProps = {
      checked: false,
      focus: false
    };
    constructor(props) {
      super(props);
      this.state = {
        checked: props.checked,
      };
    };
  
    _handleChange = () => {
      this.setState({
        checked: !this.state.checked,
      });
    };
  
    render() {
      const { checked } = this.state;
      return ( 
        <div className="React__checkbox">
        <span className="conditions">{this.props.name}</span>
          <label>
            <input 
              type="checkbox"
              className="React__checkbox--input"
              checked={checked}
              onChange={this._handleChange}
              name={this.props.name}
              id={this.props.id}
              title={this.props.title}
            />
            <span 
              className="React__checkbox--span"
              />
              <div className={this.props.className}>{this.props.title}<a href={this.props.href} target="_blank">{this.props.link}</a></div>
          </label>
        </div>
      );
    }
  }


export default FormCheckBox;