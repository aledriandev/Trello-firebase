import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import {Form, FormGroup, FormControl, Col, Row, Button} from 'react-bootstrap';
import {NavLink, Redirect} from 'react-router-dom';
import {signUp} from './actions.js'

const SingUp = ({ successLogin }) => {
  return (
    <div className='text-center'>
    {successLogin  && <Redirect to = "/home" />}
      <img className='logo-big' src={logo}/>
      <Form horizontal onSubmit =  {
               e => {
                  e.preventDefault();
                  signUp(this.first.value, this.last.value, this.email.value, this.pass.value, this.confirm.value);
               }

            }>
        <FormGroup controlId="formHorizontalFirstName">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="text" placeholder="First Name" inputRef={e=>this.first = e}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalLastName">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="text" placeholder="Last Name" inputRef={e=>this.last = e}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="email" placeholder="Email" inputRef={e=>this.email = e}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="password" placeholder="Password" inputRef={e=>this.pass = e}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalConfirmPassword">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="password" placeholder="Confirm Password" inputRef={e=>this.confirm = e}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <Button className='sing-in' type="submit">Sign up</Button>
          </Col>
        </FormGroup>
      </Form>
      <NavLink to="/sing-in" className='text-navlink'>Sign In</NavLink>
    </div>
  );
}

export default SingUp;
