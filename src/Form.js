import React, { Component } from 'react';
import './App.css';

const Form = ({ add, placeholder}) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            add(this.inputRef.value);
          }}>
            <input placeholder={placeholder} type="text" ref={e => this.inputRef = e} />
            <button className='list-add'><h4>Add</h4></button>
        </form>
    );
  }
  
export default Form;