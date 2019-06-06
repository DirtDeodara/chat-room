import Component from '../Component.js';
import { dirtsRoomsRef } from '../services/firebase.js';

class ChatRoomItem extends Component {
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
        
        // const isOwner = auth.currentUser.uid === room.owner;
        // const button = isOwner ? '<button>X</button>' : '';
        return /*html*/ `
            <li class="chat-room">
                <a href="">${room.roomName}</a>
                <button>X</button>
            </li>
            
    `;
    }
}

export default ChatRoomItem;

