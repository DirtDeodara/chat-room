import Component from '../Component.js';
import Profile from './Profile.js';
import { auth } from '../services/firebase.js';
import RoomList from '../home/RoomList.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();
        const rooms = [];

        const roomList = new RoomList({
            onUpdate: (roomToUpdate) => {
                const index = rooms.indexOf(roomToUpdate);

                const task = rooms[index];
                task.completed = !task.completed;

                roomList.update({ rooms });
            }
        });
        
        const profile = new Profile();
        dom.appendChild(profile.render());
    
        auth.onAuthStateChanged(user => {
            profile.update({ user });
        });

        return dom;
    }

    renderTemplate() {
        const title = this.props.title;
        console.log(this.props);
        return /*html*/ `
            <header>
                <div id="header-topper">
                    <h1>${title}</h1>
                    <h2 id="sub-header">...off the mats</h2>
                    <img id="tapedHands" src="../../assets/tapedHands.jpg">
                </div>
                
            </header>
        `;
    }
}

export default Header;
