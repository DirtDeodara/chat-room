import './html-equal.js';
import './Profile.test.js';
import { app } from '../src/services/firebase.js'; 

QUnit.done(() => {
    app.delete();
}); 