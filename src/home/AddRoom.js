import Component from '../Component.js';

class AddRoom extends Component {
    renderTemplate() {
        return /*html*/ `
        <form class="add-room">
            <button id="add-button">⊕</button>
            <label><input id="input" name="" placeholder="Create a room"></label>
        </form>
            
    `;
    }
}

export default AddRoom;