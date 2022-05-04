import axios from 'axios';
import React from 'react';

class ApplicantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name_first: '',
      name_last: '',
      phone_number: '',
      email_address: '',
      address_line_1: '',
      address_line_2: '',
      address_city: '',
      address_state: '',
      address_postal_code: '',
      address_country_code: '',
      birth_date: '',
      document_ssn: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }

  handleSubmit(event) {
    axios.post('/onboarding', {
      payload: this.state
    }).then((res) => {
        if(res.data.candidateOutcome == "Manual Review") {
          alert("Thanks for submitting your application, we'll be in touch shortly")
        } else if (res.data.candidateOutcome == "Denied") {
          alert("Sorry, your application was not successful")
        } else {
          alert("Congratulations, you have been approved!")
        }
    })
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.name_first} onChange={this.handleChange} name="name_first" />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={this.state.name_last} onChange={this.handleChange} name="name_last"/>
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" value={this.state.phone_number} onChange={this.handleChange} name="phone_number"/>
        </label>
        <br />
        <label>
          Email Address:
          <input type="text" value={this.state.email_address} onChange={this.handleChange} name="email_address"/>
        </label>
        <br />
        <label>
          Address Line 1:
          <input type="text" value={this.state.address_line_1} onChange={this.handleChange} name="address_line_1"/>
        </label>
        <br />
        <label>
          Address Line 2:
          <input type="text" value={this.state.address_line_2} onChange={this.handleChange} name="address_line_2"/>
        </label>
        <br />
        <label>
          Address City:
          <input type="text" value={this.state.address_city} onChange={this.handleChange} name="address_city"/>
        </label>
        <br />
        <label>
          Address State:
          <input type="text" value={this.state.address_state} onChange={this.handleChange} name="address_state"/>
        </label>
        <br />
        <label>
          Address Postal Code:
          <input type="text" value={this.state.address_postal_code} onChange={this.handleChange} name="address_postal_code"/>
        </label>
        <br />
        <label>
          Address Country Code:
          <input type="text" value={this.state.address_country_code} onChange={this.handleChange} name="address_country_code"/>
        </label>
        <br />
        <label>
          Birth Day:
          <input type="text" value={this.state.birth_date} onChange={this.handleChange} name="birth_date"/>
        </label>
        <br />
        <label>
          Document SSN:
          <input type="text" value={this.state.document_ssn} onChange={this.handleChange} name="document_ssn" pattern="^(?!(000|666|9))\d{3}(?!00)\d{2}(?!0000)\d{4}$"/>
        </label>
        <br />
        <label>
          Submit:
          <input type="submit"/>
        </label>
      </form>
    );
  }
}


export default ApplicantForm;