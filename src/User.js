import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import { NavLink } from 'react-router-dom';
import { addBoard } from './actions.js';
import Form from './Form.js';

const User = ({ user, iUser }) => {
  return (
    <div>
      <header className='text-center'>
        <img className='logo-small' src={logo} />
        <h1>{user.name}</h1>
      </header>
      <div className='boards'>
        {
          user.teams.map((team, iTeam) => <div key={iTeam} className='team'>
            <NavLink to={'/' + iUser + '/' + iTeam}><h3 className='txt-white'>{team.name}</h3></NavLink>
            {
              team.boards.map((board, iBoard) => <div key={iBoard} className='board'>
                <NavLink to={'/' + iUser + '/' + iTeam + '/' + iBoard}><h4>{board.name}</h4></NavLink>
              </div>)
            }
            <Form add={addBoard} placeholder='Add Board...' />
          </div>)
        }
      </div>
    </div>
  );
}

export default User;
