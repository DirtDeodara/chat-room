import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';
import ChatList from './ChatList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        
        const header = new Header();
        dom.insertBefore(header.render(), main);
        
        const footer = new Footer();
        dom.insertBefore(footer.render(), main);
        
        const chatList = new ChatList();
        dom.insertBefore(chatList.render(), main);
        

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;