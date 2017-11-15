import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect,NavLink} from 'react-router-dom'
import SingUp from './SingUp.js'
import SingIn from './SingIn.js'
import Board from './Board.js'
import BoardUser from './BoardUser.js'
import TeamUser from './TeamUser.js'
import { connect } from 'redux-zero/react';

const Sing = ({}) => {
  return (
          <div className='text-center line-block'>
            <img className='logo-big' src={logo}/>
            <NavLink to="/sing-in" className='sing-in' >Sing In</NavLink>
            <NavLink to="/sing-up" className='sing-in' >Sing Up</NavLink>
            <NavLink to="/boards-Alejandra" className='sing-in' >Board</NavLink>
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
              users.map((user,index)=>{
                const path = '/boards-' + user.name;
                {
                  // user.teams.map((board,index)=>{
                  //   const pathBoard = '/boards-'+ user.name + user.board.name;
                  //   return(
                  //     <Route exact path={pathBoard} render={()=><BoardUser/>}/>
                  //   )
                  // })
                }
                return(
                  <Route exact path={path} render={()=><Board user={user}/>}/>
                );
              })
            }
            {
              users.map(user=>{
                return(
                  user.teams.map((team,index)=>{
                    const path = '/boards-' + user.name +'/'+ index;
                    return <Route exact path={path} render={()=><TeamUser team={team}/>}/>
                  })
                )
              })
            }
            {
              users.map(user=>{
                return(
                  user.teams.map((team,index)=>{
                    return(
                      team.boards.map((board,idx)=>{
                        const path = '/boards-' + user.name +'/'+ index+'/'+idx;
                        return <Route exact path={path} render={()=><BoardUser board={board}/>}/>
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
