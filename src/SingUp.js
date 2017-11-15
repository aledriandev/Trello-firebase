import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import {Form, FormGroup, FormControl, Col, Row, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

const SingUp = ({}) => {
  return (
    <div className='text-center'>
      <img className='logo-big' src={logo}/>
      <Form horizontal>
        <FormGroup controlId="formHorizontalFirstName">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="text" placeholder="First Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalLastName">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="text" placeholder="Last Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalConfirmPassword">
          <Col smOffset={4} sm={4} mdOffset={3} md={6} xsOffset={2} xs={8}>
            <FormControl className='input-data' type="password" placeholder="Confirm Password" />
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
