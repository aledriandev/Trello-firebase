import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import { addCard , addList} from './actions.js'

const BoardUser = ({ user, team, board }) => {
  return (
    <div>
      <header className='text-center'>
        <img className='logo-small' src={logo} />
      </header>
      <h1>{user.name}</h1>
      <div className='boards'>
        <h3 className='txt-white'>{team.name}</h3>
        <h4 className='txt-white'>{board.name}</h4>
        {
          board.lists.map((list, index) => <div key={index} className='board'>
            <h4>{list.name}</h4>
            {
              list.cards.map((card, indx) => <div key={index} className='card'>
                <p>{card}</p>
              </div>)
            }
            <form onSubmit={(e) => {
              e.preventDefault();
              addCard(this.cardInputRef.value);
            }}>
              <input placeholder='Add Card...' type="text" ref={e => this.cardInputRef = e} />
              <button className='card-add'><h4>Add</h4></button>
            </form>
          </div>)
        }
        <form onSubmit={(e) => {
          e.preventDefault();
          addList(this.listInputRef.value);
        }}>
          <input placeholder='Add List...' type="text" ref={e => this.listInputRef = e} />
          <button className='list-add'><h4>Add</h4></button>
        </form>
      </div>
    </div>
  );
}

export default BoardUser;
