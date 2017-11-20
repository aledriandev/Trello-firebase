import React, { Component } from 'react';
import './App.css';

const Form = ({ add, placeholder, userActual, iTeam}) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            add(this.inputRef.value, userActual, iTeam);
          }}>
            <input placeholder={placeholder} type="text" ref={e => this.inputRef = e} />
            <button className='list-add'><h4>Add</h4></button>
        </form>
    );
  }
  
export default Form;