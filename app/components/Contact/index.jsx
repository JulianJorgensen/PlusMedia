import React from 'react';
let {connect} = require('react-redux');
import axios from 'axios';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import Marquee from '../Marquee/Marquee';
import Map from './Map';
import PageItems from '../PageItems';
import styles from './index.css';
let modalActions = require('actions/modalActions');

class Contact extends React.Component{
  constructor(){
    super();

    this.state = {
      name: '',
      email: '',
      company: '',
      message: '',
      submitting: false,
      sent: false,
      error: null
    };
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitting: true
    });

    // Submit the form
    axios.post('/email/send', {
      name: this.state.name,
      email: this.state.email,
      company: this.state.company,
      message: this.state.message,
    })
    .then((response) => {
      if (response.status === 200){
        this.setState({
          submitting: false,
          sent: true
        });
      }
    })
    .catch((error) => {
      console.log('Error using /email/send: ', error);
    });
  }

  render() {
    let {dispatch} = this.props;

    let renderForm = () => {
      if (!this.state.sent){
        return (
          <div>
            <h2>Contact</h2>
            <form onSubmit={this.handleSubmit.bind(this)} className={styles.form}>
              <Input
                type='text'
                value={this.state.name}
                placeholder='Name'
                required
                theme={styles}
                className={styles.input}
                onChange={this.handleChange.bind(this, 'name')} />

              <Input
                type='text'
                value={this.state.phone}
                placeholder='Phone number'
                required
                theme={styles}
                className={styles.input}
                onChange={this.handleChange.bind(this, 'phone')} />

              <Input
                type='text'
                value={this.state.company}
                placeholder='Company'
                required
                theme={styles}
                className={styles.input}
                onChange={this.handleChange.bind(this, 'company')} />

              <Input
                type='email'
                value={this.state.email}
                placeholder='Email'
                theme={styles}
                required
                className={styles.input}
                onChange={this.handleChange.bind(this, 'email')} />

              <Input
                type='textarea'
                placeholder='Message'
                multiline={true}
                rows={5}
                theme={styles}
                className={styles.textarea}
                onChange={this.handleChange.bind(this, 'message')} />

              <Button type='submit' className={styles.submit} label='Submit' disabled={this.state.submitting} raised primary />
            </form>
          </div>
        )
      }else{
        return (
          <div className={styles.sentContainer}>
            Thank you {this.state.name.split(' ')[0]}. We will get back to you as soon as possible.
          </div>
        )
      }
    }

    return (
      <div>
        <Map />
        <div className="page-content">
          <div className={styles.topBar}></div>
          <div className={styles.contactMethods}>
            <div className={styles.contacts}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <h4>PlusMedia, LLC</h4>
                  <address>
                    100 Mill Plain Road, 4th Floor<br />
                    Danbury, CT 06811<br />
                    203.748.6500
                  </address>
                </div>
                <div className={styles.col}>
                  <h4>Business Development</h4>
                  Sandra Roscoe<br />
                  EVP, Strategy & Development<br />
                  <a href="mailto:sandra.roscoe@plusme.com">sandra.roscoe@plusme.com</a>

                  <h4>Career Opportunities</h4>
                  Nicole Daoust<br />
                  Human Resources Manager<br />
                  <a href="mailto:nicole.daoust@plusme.com">nicole.daoust@plusme.com</a>

                  <h4>Media Inquiries</h4>
                  Jessica Carnrick<br />
                  Marketing Communications Specialist<br />
                  <a href="mailto:jessica.carnrick@plusme.com">jessica.carnrick@plusme.com</a>
                </div>
              </div>

            </div>
            <div className={styles.formContainer}>
              {renderForm()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      modal: state.modal
    }
  }
)(Contact);
