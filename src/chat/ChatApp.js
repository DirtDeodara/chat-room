import Component from '../Component.js';
import Header from '../shared/Header.js';
import MessageList from './MessageList.js'; 
import Footer from '../shared/Footer.js';
import { dirtsRoomsRef, messagesByRoomRef } from '../services/firebase.js';
import QUERY from '../QUERY.js';
import AddMessage from '../chat/AddMessage.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: [] });
        dom.insertBefore(header.render(), main);

        const searchParams = QUERY.parse(window.location.search.slice(1));
        const dirtsRoomRef = dirtsRoomsRef.child(searchParams.key);
       

        const addMessage = new AddMessage({ key: searchParams.key });
        const addMessageDOM = addMessage.render();
        main.appendChild(addMessageDOM);


        dirtsRoomRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const messages = value.messages ? Object.values(value.messages) : [];
                header.update({ title: value.roomName });
                messageList.update({ messages: messages, roomDetails: value });
            });
            
        messagesByRoomRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const roomMessages = value[searchParams.key];
                const messages = Object.keys(roomMessages).map(ele => {
            
                    return roomMessages[ele].message;

                });
                messageList.update({ messages: messages });
            });

        const messageList = new MessageList({ messages: [] });
        main.appendChild(messageList.render());
 
        const footer = new Footer();
        main.appendChild(footer.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div id="chat-app">
                <main></main>
            </div>
    `;
    }
}

export default ChatApp;

