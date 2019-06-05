import Component from '../Component.js';
import ChatRoom from '../home/ChatRoom.js';

class ChatList extends Component {
    
    render() {
        const list = this.renderDOM();

        const chatRoom = new ChatRoom();
        const chatRoomDOM = chatRoom.render();
        list.appendChild(chatRoomDOM);

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