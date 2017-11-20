import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import { addCard , addList} from './actions.js'
import Form from './Form.js'

const BoardUser = ({ user, iUser, team, iTeam, board, iBoard }) => {
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
          board.lists.map((list, iList) => <div key={iList} className='board'>
            <h4>{list.name}</h4>
            {
              list.cards.map((card, iCard) => <div key={iCard} className='card'>
                <p>{card}</p>
              </div>)
            }
            <Form add={addCard} placeholder='Add Card...'/>
          </div>)
        }
        <Form add={addList} placeholder='Add List...'/>
      </div>
    </div>
  );
}

export default BoardUser;
