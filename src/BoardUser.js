import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';

const BoardUser = ({user, team, board}) => {
  return (
    <div>
      <header className='text-center'>
        <img className='logo-small' src={logo}/>
      </header>
      <h1>{user.name}</h1>
      <div className='boards'>
        <h3 className='txt-white'>{team.name}</h3>
        <h4 className='txt-white'>{board.name}</h4>
        {
          board.lists.map((list,index)=><div key={index} className='board'>
            <h4>{list.name}</h4>
            {
              list.cards.map((card,indx)=><div key={index} className='card'>
                <p>{card}</p>
              </div>)
            }
            <button className='card-add'><h4>Add Card...</h4></button>
          </div>)
        }
        <button className='board'><h4>Add List...</h4></button>
      </div>
    </div>
  );
}

export default BoardUser;
