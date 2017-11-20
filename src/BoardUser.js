import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import { addCard , addList} from './actions.js'
import Form from './Form.js'

const BoardUser = ({ userActual, team, iTeam, board, iBoard }) => {
  console.log('boarduser', userActual);
  console.log('team', team);
  console.log('iteam', iTeam);
  console.log('board', board);
  console.log('iBoard', iBoard);
  return (
    <div>
      {userActual && <header className='text-center'>
        <img className='logo-small' src={logo} />
        <h1>{userActual.name}</h1>
      </header>
      }{ userActual && board && team && <div className='boards'>
        <h3 className='txt-white'>{team.name}</h3>
        <h4 className='txt-white'>{board.name}</h4>
        { board.lists.map((list, iList) => <div key={iList} className='board'>
            {<h4>{list.name}</h4>}
            {
              list.cards.map((card, iCard) => <div key={iCard} className='card'>
                <p>{card}</p>
              </div>)
            }
            <Form add={addCard} placeholder='Add Card...'/>
          </div>)
        }
        <Form add={addList} userActual={userActual} iTeam={iTeam} iBoard={iBoard} placeholder='Add List...'/>
      </div>}
    </div>
  );
}

export default BoardUser;
