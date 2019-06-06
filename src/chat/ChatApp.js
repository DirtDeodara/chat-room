import Component from '../Component.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
    `;
    }
}

export default ChatApp;