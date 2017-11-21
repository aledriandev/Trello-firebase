import React, { Component } from 'react';
import './App.css';

class  Form   extends Component {
    render () { 
    const { add, placeholder, userActual, iTeam, iBoard, iList, classN} = this.props
    return (
        <div>
            <form className={classN} onSubmit={(e) => {
                e.preventDefault();
                if(this.inputRef.value !== '')
                    add(this.inputRef.value, userActual, iTeam, iBoard, iList);
                this.inputRef.value = ''; 
            }}>
                <input className='input-add' placeholder={placeholder} type="text" ref={e => this.inputRef = e} />
                <button className='button-add'><h4>Add</h4></button>
            </form>
        </div>
    );
  }
}
  
export default Form;