import Component from '../Component.js';

class MessageItem extends Component {

    renderTemplate() {
        const message = this.props.message;
        const date = new Date(message.date);

        return /*html*/ `
        <li class="message">
            <p>${message.displayName}</p>
            <p id="date">${date.toLocaleDateString()} at ${date.toLocaleTimeString()}</p>
            <p>${message}</p> 
        </li>
            
    `;
    }
}

export default MessageItem;