import React, { Component } from 'react';
import FormInput from './FormInput';
import FormCheckBox from './FormCheckbox';
import FormSelect from './FormSelect';

class FormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businessName: '',
            businessEmail: '',
            userName: '',
            password: '',
            website: '',
            businessSelection: ['type1', 'type2', 'type3'],
            businessSelected: 'Select your business',
            selectedOption: '',
            termsChecked: false,
            privacyChecked: false,
            touched: {
                email: false,
                password: false
            }
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleBusinessName = this.handleBusinessName.bind(this);
        this.handleBusinessEmail = this.handleBusinessEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleWebsite = this.handleWebsite.bind(this);
        this.handleCheckTerms = this.handleCheckTerms.bind(this);
        this.handleCheckPrivacy = this.handleCheckPrivacy.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const payload = {
            businessName: this.state.businessName,
            businessEmail: this.state.businessEmail,
            userName: this.state.userName,
            password: this.state.password,
            website: this.state.website,
            businessSelected:  this.state.businessSelected,
            privacyChecked: this.state.privacyChecked,
            termsChecked: this.state.termsChecked
        }
        console.log('payload to be sent as a POST request', payload);
    }
    handleBusinessName = (e) => {
        this.setState({ businessName: e.target.value })
    }
    handleBusinessEmail = (e) =>  {
        this.setState({ businessEmail: e.target.value })
    }
    handleUsername = (e) => {
        this.setState({ userName: e.target.value })
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }
    handleWebsite = (e) => {
        this.setState({ website: e.target.value })
    }
    handleCheckTerms = (e) => {
        this.setState({ termsChecked: e.target.checked })
    }
    handleCheckPrivacy = (e) => {
        this.setState({ privacyChecked: e.target.checked })
    }
    handleSelect = (e) => {
        this.setState({ businessSelected: e.target.value })
        this.setState({selectedOption : e.target.value})
    }
    handleBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }
    validated = (businessName, businessEmail, userName, password, privacyChecked, termsChecked) => {
        return {
            businessName: businessName.length === 0,
            businessEmail: businessEmail.length === 0,
            userName: userName.length === 0,
            password: password.length === 0,
            privacyChecked: !this.state.privacyChecked,
            termsChecked: !this.state.termsChecked
        }
    }

    render() {
        //setting the parameters for errors
        const errors = this.validated(this.state.businessName, this.state.businessEmail, this.state.userName, this.state.password, this.state.privacyChecked, this.state.termsChecked);
        //marks errors based on errors const above, returns error if there is error to show error field
        const shouldMarkError = (field) => {
            const hasErrors = errors[field];
            const shouldShow = this.state.touched[field];
            return hasErrors ? shouldShow : false;
        }
        //disables button if there are any errors defined above
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (
            <div className='form-container'>
                <img className="logo" src="https://www.simplr.ai/hubfs/Simplr-December2017/Image/logo.svg?t=1526032621612" alt="Simplr" />
                <h2 className="heading">LET'S GET STARTED</h2>
                <form onSubmit={this.handleFormSubmit}>
                    {/* class name is a function that returns error as a class if there is error */}
                    <FormInput
                        className={shouldMarkError('businessName') ? "form-control error" : "form-control"}
                        onBlur={this.handleBlur('businessName')}
                        inputType={'text'}
                        title={'Business Name'}
                        name={'businessName'}
                        controlFunction={this.handleBusinessName}
                        content={this.state.businessName}
                        placeholder={'Enter Business Name'}
                        showError={shouldMarkError('businessName') ? "show-error" : "hide-error"}
                        errorMessage={"Please input business name."}
                    />
                    <FormInput
                        className={shouldMarkError('businessEmail') ? "form-control error" : "form-control"}
                        onBlur={this.handleBlur('businessEmail')}
                        inputType={'text'}
                        title={'Business Email'}
                        name={'businessEmail'}
                        controlFunction={this.handleBusinessEmail}
                        content={this.state.businessEmail}
                        placeholder={'Enter Business Email'}
                        showError={shouldMarkError('businessEmail') ? "show-error" : "hide-error"}
                        errorMessage={"Please enter a valid email address."}
                    />
                    <FormInput
                        className={shouldMarkError('userName') ? "form-control error" : "form-control"}
                        onBlur={this.handleBlur('userName')}
                        inputType={'text'}
                        title={'Username'}
                        name={'Username'}
                        controlFunction={this.handleUsername}
                        content={this.state.userName}
                        placeholder={'Username'}
                        showError={shouldMarkError('userName') ? "show-error" : "hide-error"}
                        errorMessage={"Please enter your desired username."}
                    />
                    <FormInput
                        className={shouldMarkError('password') ? "form-control error" : "form-control"}
                        onBlur={this.handleBlur('password')}
                        inputType={'password'}
                        title={'Password'}
                        name={'Password'}
                        condition={'6 characters | 1 uppercase | 1 lowercase | 1 digit'}
                        controlFunction={this.handlePassword}
                        content={this.state.password}
                        placeholder={'Password'}
                        showError={shouldMarkError('password') ? "show-error" : "hide-error"}
                        errorMessage={"Password should have six characters."}
                    />
                    <FormInput
                        className={'form-control website'}
                        inputType={'text'}
                        title={'Website'}
                        name={'website'}
                        condition={'(Optional)'}
                        controlFunction={this.handleWebsite}
                        content={this.state.website}
                        placeholder={'Website'}
                    />
                    {/* businessselected should be namechanged to default opt */}
                    <FormSelect
                        name={'businessOptions'}
                        className={this.state.selectedOption ? 'selected-option' : 'default-option'}
                        placeholder={this.state.businessSelected}
                        optionSelect={this.state.selectedOption}
                        controlFunction={this.handleSelect}
                        options={this.state.businessSelection}
                        selectionTitle={'Type of Business'}
                    />
                    <FormCheckBox
                        className={'terms'}
                        title={'Terms of Service'}
                        type={'drop-up'}
                        content={'I have read and I do accept '}
                        link={'terms of services'}
                        handleChange={this.handleCheckTerms}
                        checked={this.state.termsChecked}
                        href={'https://cdn2.hubspot.net/hubfs/3974729/Documents/SIMPLR%20%20TOS%20.pdf?t=1527102428034'}
                    />
                    <FormCheckBox
                        className={'privacy'}
                        title={'Privacy Policy'}
                        type={'drop-up'}
                        content={'I have read and I do accept '}
                        link={'privacy policy'}
                        handleChange={this.handleCheckPrivacy}
                        checked={this.state.privacyChecked}
                        href={'https://www.simplr.ai/hubfs/privacyPolicyv4.pdf'}
                    />
                    <div className="btn-container">
                        <button disabled={isDisabled} type="submit" className="btn btn-submit">REGISTER</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default FormContainer;