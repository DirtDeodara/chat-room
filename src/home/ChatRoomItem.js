import Component from '../Component.js';

class ChatRoomItem extends Component {
    render() {
        const chatRoomItem = this.renderDOM();
        
        
        return chatRoomItem;
    }
    
    renderTemplate() {
        const room = this.props.room;
        return /*html*/ `
            <li class="chat-room">
                <a>${room.roomTitle}</a>
            </li>
            
    `;
    }
}

export default ChatRoomItem;