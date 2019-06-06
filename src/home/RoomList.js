import Component from '../Component.js';
import RoomItem from '../home/RoomItem.js';

class RoomList extends Component {
    
    render() {
        const list = this.renderDOM();
        const rooms = this.props.rooms;

        rooms.forEach(room => {
            const roomItem = new RoomItem({ room });
            const roomItemDOM = roomItem.render();
            list.appendChild(roomItemDOM);
        });
        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ul id="chat-list">
                <h2>Chat Room List</h2>
            </ul>
        `;
    }
}

export default RoomList;