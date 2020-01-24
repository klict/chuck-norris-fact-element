import {chuckNorrisApi} from './utils/chuck-norris-api.js';

export class ChuckNorrisFact extends HTMLElement {

    constructor() {
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
    }

    async connectedCallback() {
        try {
            const response = await this.getChuckNorrisFact();

            const shadowRoot = this.attachShadow({mode: 'open'});

            shadowRoot.innerHTML = `
                <style>
                    .container{
                      box-shadow: 1px 8px 30px 13px rgba(0,0,0,0.2);
                      padding:20px;
                      border-radius: 15px;
                      transition: 0.3s;
                      width:fit-content;
                    }
                </style>
                
                <div class="container">
                    <strong>Chuck Norris Fact:</strong> ${response.value}
                </div>
            `;

        } catch (e) {
            console.error(e);

            this.innerHTML = `<span>Couldn't load Chuck Norris joke. Check the console for more information</span>`;
        }
    }

    static get properties() {
        return {
            category: {type: String, reflect: false}
        }
    }

    get category() {
        return this.getAttribute('category');
    }

    set category(newCategory) {
        this.setAttribute('category', newCategory);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'category') {
            this.category = newValue;
            this.connectedCallback().catch();
        }
    }

    getChuckNorrisFact() {
        return this.category ? chuckNorrisApi.getCategorizedFact(this.category) : chuckNorrisApi.getRandomFact();
    }
}

customElements.define('chuck-norris-fact', ChuckNorrisFact);