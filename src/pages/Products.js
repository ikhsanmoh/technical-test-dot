import Product from '../components/Product'

const myStyles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
  }
}

const Products = () => {
  return (
    <section style={myStyles.wrapper}>
      <Product />
      <Product />
      <Product />
    </section>
  )
}

export default Products
