

import React from "react";
import {Header, Divider} from 'semantic-ui-react'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form class="ui form"
        onSubmit={this.submitForm}
        action="https://formspree.io/xpzqdggj"
        method="POST"
      >
       <Header as="h1" textAlign="center" style={{ color: 'white' }}>Contact me</Header>
       <Divider />
       <Divider />
      
 

       <label style={{ color: 'white' }}>Your Name:</label>
        <input type="text" name="name" />
        <label style={{ color: 'white' }}>Your Email Address:</label>
        <input type="email" name="email" />
        <br />
        <label style={{ color: 'white' }}>Message:</label>
        <textarea rows="4" cols="50" name="message" ></textarea>
        <br/>
        <br/>
        {status === "SUCCESS" ? <p style={{ color: 'white' }}>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p style={{ color: 'white' }}>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}