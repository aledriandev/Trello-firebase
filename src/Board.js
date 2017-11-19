import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import {NavLink} from 'react-router-dom';

const Board = ({user,iUser}) => {
  return (
    <div>
      <header className='text-center'>
        <img className='logo-small' src={logo}/>
        <h1>{user.name}</h1>
        <p>HOLII</p>
      </header>
      <div className='boards'>
        {
          user.teams.map((team,iTeam) => <div key={iTeam} className='team'>
            <h3 className='txt-white'>{team.name}</h3>
            {
              team.boards.map((board,iBoard)=><div key={iBoard} className='board'>
                <NavLink to={'/'+iUser+'/'+iTeam+'/'+iBoard}><h4>{board.name}</h4></NavLink>
              </div>)
            }
          </div>)
        }
      </div>
    </div>
  );
}

export default Board;
