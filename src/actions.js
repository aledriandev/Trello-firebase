import store from './store.js';
import { auth, database } from './firebase';

export function signUp(first, last, email, pass, confirm) {
    console.log('signUp' + first, last, email, pass, confirm);
    const users = [...store.getState().users];
    auth.createUserWithEmailAndPassword(email, pass).then(user => {
        let newUser = {
            id: users.length,
            email: email,
            first: first,
            last: last,
            teams: [{
                name: 'xx',
                boards: [{
                    name: 'text',
                    lists: [{
                        name: 'listx',
                        card: ['card', 'de listx']
                    }, {
                        name: 'listy',
                        card: ['card', 'de listy']
                    }]
                }]
            }]
        }
        database.ref('users/' + users.length).set(newUser);

        database.ref('users/' + users.length).once('value').then(res => {
            const fullUserInfo = res.val();

            console.log('full info ', fullUserInfo);
            store.setState({
                user: {
                    id: users.length,
                    email: fullUserInfo.email,
                    first: fullUserInfo.first,
                    last: fullUserInfo.last
                }
            })
        })
    })
}


export function readBoard() {
    database.ref('users').on('value', res => {
        let users = []
        res.forEach(snap => {
            const user = snap.val();
            users.push(user);
        })
        console.log('nuevo users', users);
        store.setState({
            users: users
        })
    });
}

export function addCard(text) {
    const cards = [...store.getState().users[0].teams[0].boards[0].lists[0].cards];
    database.ref('users/0/teams/0/boards/0/lists/0/cards/' + cards.length).set(text);
}

export function addList(text) {
    const lists = [...store.getState().users[0].teams[0].boards[0].lists];
    let newList = {
        name: text,
        cards: ['esta es', text]
    }
    database.ref('users/0/teams/0/boards/0/lists/' + lists.length).set(newList);
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
    database.ref('users/0/teams/0/boards/' + boards.length).set(newBoard);
}

