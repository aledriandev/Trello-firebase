import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect,NavLink} from 'react-router-dom'
import SingUp from './SingUp.js'
import SingIn from './SingIn.js'
import User from './User.js'
import BoardUser from './BoardUser.js'
import TeamUser from './TeamUser.js'
import { connect } from 'redux-zero/react';

const Sing = ({}) => {
  return (
          <div className='text-center line-block'>
            <img className='logo-big' src={logo}/>
            <NavLink to="/sing-in" className='sing-in' >Sing In</NavLink>
            <NavLink to="/sing-up" className='sing-in' >Sing Up</NavLink>
            <NavLink to="/0" className='sing-in' >Board</NavLink>
          </div>
  );
}

const App = ({users}) => {
  return (
    <div className='body'>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Sing}/>
            <Route exact path="/sing-up" render={() =><SingUp users={users}/>}/>
            <Route exact path="/sing-in" render={() =><SingIn users={users}/>}/>
            {
              users.map((user,iUser)=>{
                const path = '/' + iUser;
                return(
                  <Route exact path={path} render={()=><User user={user} iUser={iUser}/>}/>
                );
              })
            }
            {
              users.map((user,iUser)=>{
                return(
                  user.teams.map((team,iTeam)=>{
                    const path = '/' + iUser +'/'+ iTeam;
                    return <Route exact path={path} render={()=><TeamUser team={team} iTeam={iTeam} user={user} iUser={iUser}/>}/>
                  })
                )
              })
            }
            {
              users.map((user, iUser)=>{
                return(
                  user.teams.map((team,iTeam)=>{
                    return(
                      team.boards.map((board,iBoard)=>{
                        const path = '/' +iUser +'/'+ iTeam+'/'+ iBoard;
                        return <Route exact path={path} render={()=><BoardUser board={board} iBoard={iBoard} team={team} iTeam={iTeam} user={user} iUser={iUser}/>}/>
                      })
                    )
                  })
                )
              })
            }
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const mapToProps = ({ users }) => ({ users });
export default connect(mapToProps)(App);
