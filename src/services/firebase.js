const config = {
    apiKey: 'AIzaSyAhI_qOnJYfynspKI110G9053UOhgdDQnI',
    authDomain: 'dirts-chat-room.firebaseapp.com',
    databaseURL: 'https://dirts-chat-room.firebaseio.com',
    projectId: 'dirts-chat-room',
    storageBucket: 'dirts-chat-room.appspot.com',
    messagingSenderId: '865812205856',
    appId: '1:865812205856:web:a1e622b9ad92305b'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.database();

export const dirtsRoomsRef = db.ref('rooms');

export const messagesByRoomRef = db.ref('messages-by-room');

window.db = db;