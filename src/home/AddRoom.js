import Component from '../Component.js';
import { auth, dirtsRoomsRef } from '../services/firebase.js';

class AddRoom extends Component {
    render() {
        const form = this.renderDOM();
        
        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const formData = new FormData(form);
            const newRoom = dirtsRoomsRef.push(); 
            
            const roomDetails = {   
                roomName: formData.get('room'),
                owner: auth.currentUser.uid,
                key: newRoom.key
            };
            
            newRoom.set(roomDetails);
            
            form.reset();
        });
        
        return form;
    }

    renderTemplate() {
        return /*html*/ `
        <form class="add-room">
            <button id="add-button">add a room</button>
            <label><input id="input" name="room" placeholder=" Create a room"></label>
        </form>
    `;
    }
}

export default AddRoom;