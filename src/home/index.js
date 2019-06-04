import { auth } from '../services/firebase.js';
import App from './App.js';
import '../utils/check-auth.js';

auth.onAuthStateChanged(user => {
    if(user) {
        console.log(user, 'we have a user');
    }
    else {
        console.log('no user');
    }
});


const root = document.getElementById('app');
const app = new App();
root.appendChild(app.render());