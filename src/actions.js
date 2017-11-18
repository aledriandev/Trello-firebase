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

export function addCard (text) {
    // let cards = [...store.getState().users[0].teams[0].boards[0].lists[0].cards];
    // cards.push(text);
    // firebase.database().ref('lists').push(text);
    
    let oldUsers = [...store.getState().users];
    
    let newUser = oldUsers[0].teams[0].boards[0].lists[0].cards.push(text);
    store.setState ({
        users: newUser,
    })
}