import Component from '../Component.js';
import ChatRoomItem from '../home/ChatRoomItem.js';

class ChatList extends Component {
    
    render() {
        const list = this.renderDOM();

        const chatRoomItem = new ChatRoomItem();
        const chatRoomItemDOM = chatRoomItem.render();
        list.appendChild(chatRoomItemDOM);

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