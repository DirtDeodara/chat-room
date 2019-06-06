import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';
import ChatList from './ChatList.js';
import rooms from '../../data/rooms.js'; 
import AddRoom from '../home/AddRoom.js';
import { dirtsRoomsRef } from '../services/firebase.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        
        const header = new Header();
        dom.insertBefore(header.render(), main);
        
        const addRoom = new AddRoom({});
            
        const addRoomDOM = addRoom.render();
        main.appendChild(addRoomDOM);

        const chatList = new ChatList({ rooms });
        main.appendChild(chatList.render());
        
        const footer = new Footer();
        main.appendChild(footer.render());

        dirtsRoomsRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const rooms = value ? Object.values(value) : [];
                chatList.update({ rooms });
            });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;