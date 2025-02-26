import { ProductCollectionItem } from './components/ProductCollectionItem.js'
import { PRODUCTS } from './models/Product.js';

function renderProductCollection() {
    const collectionSection = document.getElementById('collection-section')
    if (!collectionSection) {
        return
    }
    for (const product of PRODUCTS) {
        const productItem = new ProductCollectionItem();
        productItem.setAttribute('name', product.name)
        productItem.setAttribute('image-url', product.colorOptions.find(v => v.colorSwatch === product.mainColor)?.imageUrl)
        productItem.setAttribute('price-range', product.priceRange)
        collectionSection.appendChild(productItem)

    }
}

renderProductCollection()
