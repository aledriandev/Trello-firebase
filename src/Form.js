import React, { Component } from 'react';
import './App.css';

class  Form   extends Component {
    render () { 
    const { add, placeholder, userActual, iTeam, iBoard, iList} = this.props
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                add(this.inputRef.value, userActual, iTeam, iBoard, iList);
                console.log('input',this.inputRef.value)
            }}>
                <input placeholder={placeholder} type="text" ref={e => this.inputRef = e} />
                <button className='list-add'><h4>Add</h4></button>
            </form>
        </div>
    );
  }
}
  
export default Form;