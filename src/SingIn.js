import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import { Form, FormGroup, FormControl, Col, Row, Button } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
import { signIn } from './actions.js'

const SingIn = ({ successLogin }) => {
  return (
    <div className='text-center'>
      {
        successLogin && <Redirect to="/home" />
      }
      <img className='logo-big' src={logo} />
      <Form horizontal onSubmit={
        e => {
          e.preventDefault();
          signIn(this.emailInputRef.value, this.passwordInputRef.value)
        }
      }>
        <FormGroup controlId="formHorizontalEmail">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="email" placeholder="Email" inputRef={e=>this.emailInputRef=e}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="password" placeholder="Password" inputRef={e=>this.passwordInputRef=e}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <Button className='sing-in' type="submit">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
      <NavLink to="/sing-up" className='text-navlink'>Create new account</NavLink>
    </div>
  );
}

export default SingIn;
