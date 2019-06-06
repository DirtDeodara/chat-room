import ChatRoomApp from './chatRoom.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const chatRoomApp = new ChatRoomApp();
    root.appendChild(chatRoomApp.render());
});