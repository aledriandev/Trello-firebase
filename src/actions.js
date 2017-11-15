import store from './store.js';

export const addBoard = (index) => {
    let list = [...store.getState().users[0].teams[0].boards[0]];
    
}