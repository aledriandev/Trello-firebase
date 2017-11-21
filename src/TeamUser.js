import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import { NavLink } from 'react-router-dom';
import { addBoard } from './actions.js';
import Form from './Form.js';
import Header from './Header.js';
import { Redirect } from 'react-router-dom';

const TeamUser = ({ team, iTeam, userActual ,successLogin }) => {
  return (
    <div>
      {!successLogin && <Redirect to='/'/>}
      {userActual && <Header userActual={userActual}/>}
      { userActual &&
        team.boards.map((board, iBoard) => <div key={iBoard} className='board'>
          <NavLink to={'/' + userActual.id + '/' + iTeam + '/' + iBoard}><h4>{board.name}</h4></NavLink>
        </div>)
      }
      <Form add={addBoard} placeholder='Add Board...' />
    </div>
  );
}

export default TeamUser;
