import store from './store.js';
import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC5LrRT0Am4WINvGcWXqIL672JFiQiUrLk",
    authDomain: "trello-react-723d5.firebaseapp.com",
    databaseURL: "https://trello-react-723d5.firebaseio.com",
    projectId: "trello-react-723d5",
    storageBucket: "trello-react-723d5.appspot.com",
    messagingSenderId: "423350545212"
};
firebase.initializeApp(config);

export function readBoard() {
    firebase.database().ref('users').on('value', res => {
        let users = []
        res.forEach(snap => {
            const user = snap.val();
            users.push(user);
        })
        console.log('nuevo users',users);
        store.setState({
            users: users
        })
    });
}

export function addCard(text) {
    const cards = [...store.getState().users[0].teams[0].boards[0].lists[0].cards];
    firebase.database().ref('users/0/teams/0/boards/0/lists/0/cards/'+cards.length).set(text);
}

export function addList(text) {
    const lists = [...store.getState().users[0].teams[0].boards[0].lists];
    let newList = {
        name: text,
        cards: ['esta es', text]
    }
    firebase.database().ref('users/0/teams/0/boards/0/lists/'+lists.length).set(newList);
}

export function addBoard(text) {
    const boards = [...store.getState().users[0].teams[0].boards];
    let newBoard = {
        name: text,
        lists: [{
            name: 'listx',
            card: ['card', 'de listx']
        }, {
            name: 'listy',
            card: ['card', 'de listy']
        }]
    }
    firebase.database().ref('users/0/teams/0/boards/'+boards.length).set(newBoard);
    readBoard()
}