import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';
import { auth } from '../services/firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

class AuthApp extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const main = dom.querySelector('main');
        dom.insertBefore(header.render(), main);

        const footer = new Footer();
        dom.insertBefore(footer.render(), main);

        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: './',
            credentialHelper: firebaseui.auth.CredentialHelper.NONE
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main>
                <h2>Join our chat</h2>
                <div id="firebaseui-auth-container"></div>
            </main>
        </div>
            
        `;
    }
}

export default AuthApp;