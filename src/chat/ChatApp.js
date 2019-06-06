import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

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