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
            teams: [{
                name: 'xx',
                boards: [{
                    name: 'text',
                    lists: [{
                        name: 'listx',
                        cards: ['card', 'de listx']
                    }, {
                        name: 'listy',
                        cards: ['card', 'de listy']
                    }]
                }]
            }]
        }
        database.ref('users/' + users.length).set(newUser);
        database.ref('userActual').set(newUser);

        // database.ref('users/' + users.length).once('value').then(res => {
        //     const userNew = res.val();

        //     // console.log('full info ', userNew);
        //     // store.setState({
        //     //     userActual: userNew
        //     // })
            
        // })
        // database.ref('userActual').once('value').then(res => {
        //     const userNew = res.val();

        //     console.log('full info ', userNew);
        //     store.setState({
        //         userActual: users[newUser.id]
        //     })
            
        // })
    })
}

export function signIn(user, pass) {
    auth.signInWithEmailAndPassword(user, pass).then(userObj => {
        const users = [...store.getState().users];
        database.ref('users/' + userObj.id).once('value').then(res => {
            const newUser = res.val();

            console.log('newUser', newUser);
            store.setState({
                userActual: users[newUser.id]
            })
            console.log("use actuar", store.getState().userActual)
        })
    })
}
export function signOut () {
    auth.signOut();
    store.setState ( {
       successLogin : false,
       userActual: ''
    })
    console.log('successLogin', store.getState().successLogin);
 }
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user', user);
        let usersRef = database.ref('/userActual');
        console.log(usersRef)
        store.setState({
            successLogin: true,
            // userActual: user
        })
        console.log('successLogin', store.getState().successLogin);
        
    }
});

export function readBoard() {

    database.ref('userActual').on('value', res => {
        let userActual = res.val()
        console.log('nuevo user', userActual);
        store.setState({
            userActual: userActual
        })
        console.log('user-Actual', store.getState().userActual); 
    });

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

export function addList(text, userActual, iTeam, iBoard) {
    const lists = [...store.getState().users[userActual.id].teams[iTeam].boards[iBoard].lists];
    let newList = {
        name: text,
        cards: ['esta es', text]
    }
    database.ref('users/'+userActual.id+'/teams/'+iTeam+'/boards/'+ iBoard + '/lists/' + lists.length).set(newList);
    database.ref('userActual/teams/'+iTeam+'/boards/'+ iBoard + '/lists/' + lists.length).set(newList);
}

export function addBoard(text, userActual, iTeam) {
    const boards = [...store.getState().users[userActual.id].teams[iTeam].boards];
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
    database.ref('users/'+userActual.id+'/teams/'+iTeam+'/boards/' + boards.length).set(newBoard);
    database.ref('userActual/teams/'+iTeam+'/boards/' + boards.length).set(newBoard);
}

