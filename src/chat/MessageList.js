import Component from '../Component.js';
import MessageItem from './MessageItem.js';

class MessageList extends Component { 
    render() {
        const list = this.renderDOM();
        const messages = this.props.messages;

        console.log(messages);
        
        messages.forEach(message => {
            const messageItem = new MessageItem({ message });
            const messageItemDOM = messageItem.render();
            list.appendChild(messageItemDOM);
        });

        return list;
    }

    renderTemplate() {
        return /*html*/ `
        <section id="message-list">
            <ul>
                <!--<li class="message">
                    <p>xxx</p>
                </li>
                <li class="message">
                    <p>xxx</p>
                </li>
                <li class="message">
                    <p>xxx</p>
                </li>-->
            </ul>
        </section>  
    `;
    }
}

export default MessageList;