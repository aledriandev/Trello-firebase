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

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();