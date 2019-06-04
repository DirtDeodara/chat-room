import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const footer = new Footer();
        dom.insertBefore(footer.render(), main);

        const header = new Header();
        dom.insertBefore(header.render(), main);


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