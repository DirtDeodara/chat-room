import Component from '../Component.js';

class Footer extends Component {


    renderTemplate() {
        return /*html*/ `
        <footer id="footer">
            <section id="red">
                <span class="stripe">x</span>
                <span class="stripe">x</span>
                <span class="stripe">x</span>
                <span class="stripe">x</span>
            </section>
        </footer>    
    `;
    }
}

export default Footer;





