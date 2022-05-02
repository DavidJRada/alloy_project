import React from 'react';
import ReactDOM from 'react-dom';
import ApplicantForm from './components/CandidateForm.jsx';

class App extends React.Component {
  render () {
    return (<div>
      <h1>Candidate Form</h1>
      <ApplicantForm />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));