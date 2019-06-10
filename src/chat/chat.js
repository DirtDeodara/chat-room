import ChatApp from './ChatApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const chatApp = new ChatApp();
    root.appendChild(chatApp.render());
});