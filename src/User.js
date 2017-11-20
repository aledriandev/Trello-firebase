import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import { NavLink } from 'react-router-dom';
import { addBoard } from './actions.js';
import Form from './Form.js';

const User = ({ userActual, successLogin }) => {
  console.log('user---actual',userActual);
  return (
    <div>
      <header className='text-center'>
        <img className='logo-small' src={logo} />
        { userActual && <h1>{userActual.name}</h1>}
      </header>
      <div className='boards'>
        {
          userActual && userActual.teams.map((team, iTeam) => <div key={iTeam} className='team'>
            <NavLink to={'/home/' + iTeam}><h3 className='txt-white'>{team.name}</h3></NavLink>
            {
              team.boards.map((board, iBoard) => <div key={iBoard} className='board'>
                <NavLink to={'/home/' + iTeam + '/' + iBoard}><h4>{board.name}</h4></NavLink>
              </div>)
            }
            <Form add={addBoard} userActual={userActual} iTeam={iTeam} placeholder='Add Board...' />
          </div>)
        }
      </div>
    </div>
  );
}

export default User;
