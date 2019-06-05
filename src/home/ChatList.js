import Component from '../Component.js';

class ChatList extends Component {
    


    renderTemplate() {
        return /*html*/ `
        <ul id="chat-list">
            <p>remove this p tag</p>
        </ul>
    `;
    }
}

export default ChatList;