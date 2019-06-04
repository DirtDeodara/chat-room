import Component from '../Component.js';

class Footer extends Component {


    renderTemplate() {
        return /*html*/ `
        <div id="footer">
            <section id="red">
                <span class="stripe">x</span>
                <span class="stripe">x</span>
                <span class="stripe">x</span>
                <span class="stripe">x</span>
            </section>
        </div>    
    `;
    }
}

export default Footer;





