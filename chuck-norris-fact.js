import {chuckNorrisApi} from '../utils/chuck-norris-api.js';

export class ChuckNorrisFact extends HTMLElement {

    constructor() {
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
        this.category = null;
    }

    async connectedCallback() {
        try {
            const response = await this.getChuckNorrisFact();

            this.innerHTML = `
        <style>
            :host(.container){
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
              transition: 0.3s;
              width:fit-content;
            }
            :host(.container) p{
              float:right;
            }
        </style>
        <div class="container">
            <img src="assets/icon.png" alt="Chuck norris icon" height= "50" width= "50"/>
            <p>${response.value}</p>
        </div>`;

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
        return this.category ? chuckNorrisApi.getJokeFromCategory(this.category) : chuckNorrisApi.getRandomJoke();
    }
}

customElements.define('chuck-norris-fact', ChuckNorrisFact);
