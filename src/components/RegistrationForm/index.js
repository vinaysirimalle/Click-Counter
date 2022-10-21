// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    submissionPage: true,
    firstname: '',
    lastname: '',
    firsterror: false,
    lasterror: false,
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastname: event.target.value})
  }

  onBlurFirstname = event => {
    if (event.target.value === '') {
      this.setState({firsterror: true})
    } else {
      this.setState({firsterror: false})
    }
  }

  onBlurLastname = event => {
    if (event.target.value === '') {
      this.setState({lasterror: true})
    } else {
      this.setState({lasterror: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.setState({submissionPage: false, firstname: '', lastname: ''})
    } else if (firstname === '' && lastname !== '') {
      this.setState({firsterror: true})
    } else if (firstname !== '' && lastname === '') {
      this.setState({lasterror: true})
    } else {
      this.setState({firsterror: true, lasterror: true})
    }
  }

  onBackToSubmission = event => {
    event.preventDefault()
    this.setState({submissionPage: true})
  }

  onSubmissionSuccessPage = () => (
    <form className="form-container1" onSubmit={this.onBackToSubmission}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success-image"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button className="submit-button1" type="submit">
        Submit Another Response
      </button>
    </form>
  )

  onSubmissionPage = () => {
    const {firstname, lastname, firsterror, lasterror} = this.state
    const className1 = firsterror
      ? 'name-input-field error-field'
      : 'name-input-field'

    const className2 = lasterror
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label className="input-label" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className={className1}
          value={firstname}
          onChange={this.onChangeFirstname}
          onBlur={this.onBlurFirstname}
          placeholder="First name"
        />
        {firsterror && <p className="error-message">Required</p>}

        <label className="input-label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className={className2}
          value={lastname}
          onChange={this.onChangeLastname}
          onBlur={this.onBlurLastname}
          placeholder="Last name"
        />
        {lasterror && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {submissionPage} = this.state
    return (
      <div className="main-container">
        <h1 className="title">Registration</h1>
        {submissionPage
          ? this.onSubmissionPage()
          : this.onSubmissionSuccessPage()}
      </div>
    )
  }
}

export default RegistrationForm
