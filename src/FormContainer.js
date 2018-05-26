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
            termsChecked: false,
            privacyChecked: false
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
            website: this.state.website
        }
        console.log('to be sent as POST req', payload)
    }
    handleBusinessName(e) {
        this.setState({ businessName: e.target.value }, () => console.log('name', this.state.businessName))
    }
    handleBusinessEmail(e) {
        this.setState({ businessEmail: e.target.value })
    }
    handleUsername(e) {
        this.setState({ userName: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    handleWebsite(e) {
        this.setState({ website: e.target.value })
    }
    handleCheckTerms(e) {
        this.setState({ termsChecked: e.target.checked })
    }
    handleCheckPrivacy(e) {
        this.setState({ privacyChecked: e.target.checked })
    }
    handleSelect(e) {
        console.log(e.target.value);
        this.setState({ businessSelected: e.target.value })
    }
    render() {
        return (
            <div className='form-container'>
                <img className="logo" src="https://www.simplr.ai/hubfs/Simplr-December2017/Image/logo.svg?t=1526032621612" alt="Simplr" />
                <h2 className="heading">LET'S GET STARTED</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <FormInput
                        className={'business-name-input'}
                        inputType={'text'}
                        title={'Business Name'}
                        name={'businessName'}
                        controlFunction={this.handleBusinessName}
                        content={this.state.businessName}
                        placeholder={'Enter Business Name'}
                    />
                    <FormInput
                        className={'business-email-input'}
                        inputType={'text'}
                        title={'Business Email'}
                        name={'businessEmail'}
                        controlFunction={this.handleBusinessEmail}
                        content={this.state.businessEmail}
                        placeholder={'Enter Business Email'}
                    />
                    <FormInput
                        className={'username-input'}
                        inputType={'text'}
                        title={'Username'}
                        name={'Username'}
                        controlFunction={this.handleUsername}
                        content={this.state.userName}
                        placeholder={'Username'}
                    />
                    <FormInput
                        className={'password-input'}
                        inputType={'text'}
                        title={'Password'}
                        name={'Password'}
                        controlFunction={this.handlePassword}
                        content={this.state.password}
                        placeholder={'Password'}
                    />
                    <FormInput
                        className={'website'}
                        inputType={'text'}
                        title={'Website'}
                        name={'website'}
                        controlFunction={this.handleWebsite}
                        content={this.state.website}
                        placeholder={'Website'}
                    />
                    <FormSelect
                        name={'businessOptions'}
                        selectedOption={this.state.businessSelected}
                        controlFunction={this.handleSelect}
                        options={this.state.businessSelection}
                        selectionTitle={'Type of Business'}
                    />
                    <FormCheckBox
                        className={'terms'}
                        name={'Terms of Service'}
                        type={'drop-up'}
                        for={'cb1'}
                        id={'cb1'}
                        title={'I have read and I do accept '}
                        link={'terms of services'}
                        controlFunction={this.handleCheckTerms}
                        checked={this.state.termsChecked}
                        href={'https://cdn2.hubspot.net/hubfs/3974729/Documents/SIMPLR%20%20TOS%20.pdf?t=1527102428034'}
                    />
                    <FormCheckBox
                        className={'privacy'}
                        name={'Privacy Policy'}
                        type={'drop-up'}
                        for={'cb2'}
                        id={'cb2'}
                        title={'I have read and I do accept '}
                        link={'privacy policy'}
                        controlFunction={this.handleCheckPrivacy}
                        checked={this.state.privacyChecked}
                        href={'https://www.simplr.ai/hubfs/privacyPolicyv4.pdf'}
                    />
                    <div className="btn-container">
                        <button type="submit" className="btn btn-submit">REGISTER</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default FormContainer;