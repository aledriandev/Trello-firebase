import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom'
import SingUp from './SingUp.js'
import SingIn from './SingIn.js'
import User from './User.js'
import BoardUser from './BoardUser.js'
import TeamUser from './TeamUser.js'
import { connect } from 'redux-zero/react';


const Sign = ({ successLogin }) => {
  return (
    <div className='text-center line-block'>
      {successLogin && <Redirect to='/home' />}
      <img className='logo-big' src={logo} />
      <NavLink to="/sing-in" className='sing-in' >Sing In</NavLink>
      <NavLink to="/sing-up" className='sing-in' >Sing Up</NavLink>
    </div>
  );
}

const App = ({ users, userActual, successLogin }) => {
  return (
    <div className='body'>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' render={() => <Sign successLogin={successLogin} />} />
            <Route exact path="/sing-in" render={() => <SingIn successLogin={successLogin} />} />
            <Route exact path="/sing-up" render={() => <SingUp successLogin={successLogin} />} />
            <Route exact path="/home" render={() => <User userActual={userActual} successLogin={successLogin} />} />
            {
              userActual && userActual.teams.map((team, iTeam) => {
                const path = '/home/' + iTeam;
                return <Route key={iTeam} exact path={path} render={() => <TeamUser successLogin={successLogin} team={team} iTeam={iTeam} userActual={userActual} />} />
              })
            }
            {
              userActual && userActual.teams.map((team, iTeam) => {
                if (team.boards) {
                  return (
                    team.boards.map((board, iBoard) => {
                      const path = '/home/' + iTeam + '/' + iBoard;
                      return <Route key={iTeam} exact path={path} render={() => <BoardUser successLogin={successLogin} board={board} iBoard={iBoard} team={team} iTeam={iTeam} userActual={userActual} />} />
                    })
                  )
                }
              })
            }
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const mapToProps = ({ users, userActual, successLogin }) => ({ users, userActual, successLogin });
export default connect(mapToProps)(App);
