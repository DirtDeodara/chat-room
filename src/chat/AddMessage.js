import Component from '../Component.js';
import { auth, messagesByRoomRef } from '../services/firebase.js';

class AddMessage extends Component {
    render() {
        const form = this.renderDOM();
       
        const roomKey = messagesByRoomRef.child(this.props.key);
    
        
        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);
          
            const newMessage = roomKey.push();
           
            const uid = auth.currentUser;
            
            newMessage.set({
                message: formData.get('message'),
                uid: auth.currentUser.uid,
                displayName: uid.displayName,
                photoURL: uid.photoURL,
                date: new Date().toISOString(),
            });
            
            form.reset();

        });

        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form class="add-message">
            <button id="post-button" >Post</button>
                <input id="message-input" name="message" placeholder="Speak your truth">
            </form>
    `;
    }
}

export default AddMessage;

