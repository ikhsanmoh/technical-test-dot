import { useState } from 'react'
import Product from '../components/Product'

const myStyles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  noProductsText: {
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 22
  }
}

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Macbook M1', price: 16000000, thumbnail: 'macbook-m1.png' },
    { id: 2, name: 'Asus ROG G531GD', price: 20000000, thumbnail: 'asus-rog-strix-g531gd.png' },
    { id: 3, name: 'Keyboard Fortress K9', price: 1500000, thumbnail: 'keyboard-fortress-K9-01.jpg' },
    { id: 4, name: 'Mouse Logitech G402', price: 800000, thumbnail: 'mouse-gaming-logitech-g402.png' },
    { id: 5, name: 'Headphone Rexus F55', price: 1100000, thumbnail: 'headphone-gaming-rexus-f55.png' },
  ])

  return (
    <section style={myStyles.wrapper}>
      {products.length <= 0 ?
        <p style={myStyles.noProductsText}>No products available</p> :
        products.map(product => (
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
    </section>
  )
}

export default Products
