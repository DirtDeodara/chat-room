import Component from '../Component.js';
import { dirtsRoomsRef } from '../services/firebase.js';

class RoomItem extends Component {
    render() {                        
        const dom = this.renderDOM();
        const room = this.props.room;
        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            dirtsRoomsRef.child(room.key).remove();
        });
        return dom;
    }

    renderTemplate() {
        const room = this.props.room;
        
        return /*html*/ `
            <li class="chat-room">
                <a href="chatRoom.html?key=${room.key}">${room.roomName}</a>
                <button>X</button>
            </li>
            
    `;
    }
}

export default RoomItem;

