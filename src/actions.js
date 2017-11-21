import store from './store.js';
import { auth, database } from './firebase';

export function signUp(first, last, email, pass, confirm) {
    console.log('signUp' + first, last, email, pass, confirm);
    const users = [...store.getState().users];
    auth.createUserWithEmailAndPassword(email, pass).then(user => {
        let newUser = {
            id: users.length,
            email: email,
            name: first,
            last: last,
            teams: [
                {
                    name: 'Personal Board',
                    boards: []
                },
                {
                    name: 'Other Boards',
                    boards: []
                }]
        }
        database.ref('users/' + users.length).set(newUser);
        database.ref('userActual').set(newUser);
    })
}

export function signIn(user, pass) {
    const users = [...store.getState().users];
    auth.signInWithEmailAndPassword(user, pass).then(userObj => {

        for (user of users) {
            if (user.email == userObj.email) {
                store.setState({
                    userActual: user,
                })
                database.ref('userActual').set(user);
            }
        }
        console.log('my user', store.getState().userActual);
    }).catch((error)=>alert('Usuario no encontrado'))
}
export function signOut() {
    auth.signOut();
    store.setState({
        successLogin: false,
        userActual: ''
    })
    console.log('successLogin', store.getState().successLogin);
}
auth.onAuthStateChanged(user => {
    if (user) {
        let usersRef = database.ref('/userActual');
        store.setState({
            successLogin: true,
        })
    }
});

export function readBoard() {

    database.ref('userActual').on('value', res => {
        let userActual = res.val()
        store.setState({
            userActual: userActual
        })
        console.log('nuevo user', userActual);
    });

    database.ref('users').on('value', res => {
        let users = []
        res.forEach(snap => {
            const user = snap.val();
            users.push(user);
        })
        store.setState({
            users: users
        })
    });

}

export function addCard(text, userActual, iTeam, iBoard, iList) {
    let cards

    if ( store.getState().users[userActual.id].teams[iTeam].boards[iBoard].lists[iList].cards != undefined )
        cards = [...store.getState().users[userActual.id].teams[iTeam].boards[iBoard].lists[iList].cards];
    else 
        cards = [];

    database.ref('users/0/teams/0/boards/0/lists/0/cards/' + cards.length).set(text);
    database.ref('users/' + userActual.id + '/teams/' + iTeam + '/boards/' + iBoard + '/lists/' + iList + '/cards/' + cards.length).set(text);
    database.ref('userActual/teams/' + iTeam + '/boards/' + iBoard + '/lists/' + iList + '/cards/' + cards.length).set(text);
}

export function addList(text, userActual, iTeam, iBoard) {
    let lists;

    if( store.getState().users[userActual.id].teams[iTeam].boards[iBoard].lists != undefined )
        lists = [...store.getState().users[userActual.id].teams[iTeam].boards[iBoard].lists];
    else
        lists = [];

    let newList = {
        name: text,
        cards: []
    }
    database.ref('users/' + userActual.id + '/teams/' + iTeam + '/boards/' + iBoard + '/lists/' + lists.length).set(newList);
    database.ref('userActual/teams/' + iTeam + '/boards/' + iBoard + '/lists/' + lists.length).set(newList);
}

export function addBoard(text, userActual, iTeam) {
    let boards;

    if(store.getState().users[userActual.id].teams[iTeam].boards != undefined)
        boards = [...store.getState().users[userActual.id].teams[iTeam].boards];
    else
        boards = [];

    let newBoard = {
        name: text,
        lists: []
    }
    database.ref('users/' + userActual.id + '/teams/' + iTeam + '/boards/' + boards.length).set(newBoard);
    database.ref('userActual/teams/' + iTeam + '/boards/' + boards.length).set(newBoard);
}

