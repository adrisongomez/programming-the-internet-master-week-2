import { FONT_AWESOME_LINK } from "../shared/constant.js";

const PRODUCT_COLLECTION_CSS_LINK = document.createElement('link')
PRODUCT_COLLECTION_CSS_LINK.setAttribute('rel', 'stylesheet');
PRODUCT_COLLECTION_CSS_LINK.setAttribute('href', './assets/css/ProductCollectionItem.css');

export class ProductCollectionItem extends HTMLElement {
    #container = null

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'closed' })
        this.#container = document.createElement('div')
        this.shadow.appendChild(PRODUCT_COLLECTION_CSS_LINK.cloneNode(true));
        this.shadow.appendChild(FONT_AWESOME_LINK.cloneNode(true))
        this.shadow.appendChild(this.#container);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const data = {
            name: this.getAttribute('name'),
            imageUrl: this.getAttribute('image-url'),
            priceRange: this.getAttribute('price-range'),
        }
        this.#container.innerHTML = `
            <article>
                <img src="${data.imageUrl}" >
                <div>
                    <div>
                        <span class="name">${data.name}</span>
                        <span class="price">$${data.priceRange}</span>
                    </div>
                    <button>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            <article>
        `
    }
}

window.customElements.define('app-product-collection-item', ProductCollectionItem)