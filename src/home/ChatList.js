import Component from '../Component.js';
import AddRoom from '../home/AddRoom.js';

class ChatList extends Component {
    
    render() {
        const list = this.renderDOM();

        const addRoom = new AddRoom();
        const addRoomDOM = addRoom.render();
        list.appendChild(addRoomDOM);

        return list;
    }


    renderTemplate() {
        return /*html*/ `
            <ul id="chat-list">
                <p>remove this p tag</p>
            </ul>
    `;
    }
}

export default ChatList;