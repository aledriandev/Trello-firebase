import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import { NavLink, Redirect } from 'react-router-dom';
import { addBoard } from './actions.js';
import Form from './Form.js';
import {Col, Row} from 'react-bootstrap';
import Header from './Header.js'

const User = ({ userActual, successLogin }) => {
  return (
    <div>
      {!successLogin && <Redirect to='/'/>}
      <Header userActual={userActual}/>
      <div className='boards'>
        {
          userActual && userActual.teams.map((team, iTeam) => <div key={iTeam} className='team'>
            <NavLink to={'/home/' + iTeam}><h3 className='txt-white'>{team.name}</h3></NavLink>
            {team.boards &&
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
