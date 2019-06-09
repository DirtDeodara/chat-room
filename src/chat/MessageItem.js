import Component from '../Component.js';
import { auth, messagesByRoomRef } from '../services/firebase.js';


class MessageItem extends Component {



    renderTemplate() {
        const message = this.props.message;
        const date = new Date(message.date);

        return /*html*/ `
        <li class="message">
            <p>${message.displayName}</p>
            <p id="date">${date.toLocaleDateString()} at ${date.toLocaleTimeString()}</p>
            <p>${this.props.message}</p> 
        </li>
            
    `;
    }
}

export default MessageItem;