import Component from '../Component.js';
import ChatRoomItem from '../home/ChatRoomItem.js';

class ChatList extends Component {
    
    render() {
        const list = this.renderDOM();
        const rooms = this.props.rooms;
        console.log(rooms);

        rooms.forEach(room => {
            const chatRoomItem = new ChatRoomItem({ room });
            const chatRoomItemDOM = chatRoomItem.render();
            list.appendChild(chatRoomItemDOM);
        });
        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ul id="chat-list"></ul>
        `;
    }
}

export default ChatList;