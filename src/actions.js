import store from './store.js';

import { auth, database } from './firebase';
export function signUp(first, last, email, pass, confirm) {
    console.log('signUp' + first, last, email, pass, confirm);
    const users = [...store.getState().users];
    auth.createUserWithEmailAndPassword(email, pass).then(user => {

        let newUser = {
            id: users.length,
            uid: user.uid,
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

        database.ref('users/' + user.uid).set(newUser);

        database.ref('users/' + user.uid).once('value').then(res => {
            const userInfo = res.val();
            console.log('userInfo --------', userInfo)
            store.setState({
                userActual: userInfo,
            })
            console.log('useeer Actual de Signup', )
        })
    })
}

export function signIn(user, pass) {
    const users = [...store.getState().users];
    auth.signInWithEmailAndPassword(user, pass).then(userObj => {
        for (user of users) {
            if (user.email == userObj.email) {
                database.ref('users/' + user.id).once('value').then(res => {
                    const userActive = res.val();

                    store.setState({
                        userActual: userActive,
                    })
                });
            }
        }

        console.log('my user', store.getState().userActual);
    }).catch((error) => alert('usuario no encontrado'))
}

export function signOut() {
    auth.signOut();
    store.setState({
        successLogin: false,
        userActual: '',
        users: [],
    })
    console.log('successLogin', store.getState().successLogin);
}

auth.onAuthStateChanged(user => {
    // const users = [...store.getState().users];
    if (user) {
        console.log('user-atenticaacion', user.uid)
        database.ref('users/' + user.uid).once('value').then(res => {
            const userInfo = res.val();
            store.setState({
                userActual: userInfo,
                successLogin: true,
            })
        })

        database.ref('users/' + user.uid).on('value', res => {
            const userInfo = res.val();
            store.setState({
                userActual: userInfo,
                successLogin: true,
            })
        })
        console.log('user-atenticaacion----', user.uid)
        console.log('user', user);
        console.log('userActual en onAutiStahe', store.getState().userActual)
    }
});

export function addCard(text, userActual, iTeam, iBoard, iList) {
    let cards

    if (store.getState().userActual.teams[iTeam].boards[iBoard].lists[iList].cards != undefined)
        cards = [...store.getState().userActual.teams[iTeam].boards[iBoard].lists[iList].cards];
    else
        cards = [];

    database.ref('users/' + userActual.uid + '/teams/' + iTeam + '/boards/' + iBoard + '/lists/' + iList + '/cards/' + cards.length).set(text);
    // database.ref('userActual/teams/' + iTeam + '/boards/' + iBoard + '/lists/' + iList + '/cards/' + cards.length).set(text);
}

export function addList(text, userActual, iTeam, iBoard) {
    let lists;

    if (store.getState().userActual.teams[iTeam].boards[iBoard].lists != undefined)
        lists = [...store.getState().userActual.teams[iTeam].boards[iBoard].lists];
    else
        lists = [];

    let newList = {
        name: text,
        cards: []
    }
    database.ref('users/' + userActual.uid + '/teams/' + iTeam + '/boards/' + iBoard + '/lists/' + lists.length).set(newList);
    // database.ref('userActual/teams/' + iTeam + '/boards/' + iBoard + '/lists/' + lists.length).set(newList);
}

export function addBoard(text, userActual, iTeam) {
    let boards;

    if (store.getState().userActual.teams[iTeam].boards != undefined)
        boards = [...store.getState().userActual.teams[iTeam].boards];
    else
        boards = [];

    let newBoard = {
        name: text,
        lists: []
    }
    database.ref('users/' + userActual.uid + '/teams/' + iTeam + '/boards/' + boards.length).set(newBoard);
    // database.ref('userActual/teams/' + iTeam + '/boards/' + boards.length).set(newBoard);
}

export function readBoard() {

    // database.ref('userActual').on('value', res => {
    //     let userActual = res.val()
    //     store.setState({
    //         userActual: userActual
    //     })
    //     console.log('nuevo user', userActual);
    // });
    // const user = store.getState().userActual;
    // console.log('store userActual primero', store.getState().userActual.uid)

    // console.log('store userActual uid', user.uid)
    // database.ref('users/'+ user.uid).on('value', res => {
    //     const userInfo = res.val();
    //     console.log('user info read', userInfo)
    //     store.setState({
    //         userActual: userInfo,
    //     })

    //     console.log('store userActual', store.getState().userActual)
    // });

}