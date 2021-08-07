import { useState } from 'react'
import Product from '../components/Product'
import productsFakeData from '../fake-data/ProductsData'

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
  const [products, setProducts] = useState(productsFakeData)

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
