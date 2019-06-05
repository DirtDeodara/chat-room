import Component from '../Component.js';
import Profile from './Profile.js';
import AddRoom from '../home/AddRoom.js';
import { auth } from '../services/firebase.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();
        const profile = new Profile();
        dom.appendChild(profile.render());

        const addRoom = new AddRoom({});

        const addRoomDOM = addRoom.render();
        dom.appendChild(addRoomDOM);


        auth.onAuthStateChanged(user => {
            profile.update({ user });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <header>
                <div id="header-topper">
                    <h1>Jiu Jitsu</h1>
                    <h2 id="sub-header">...off the mats</h2>
                    <img id="tapedHands" src="../../assets/tapedHands.jpg">
                 </div>
                
            </header>
        `;
    }
}

export default Header;