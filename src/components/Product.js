import { Link } from "react-router-dom";


const myStyles = {
  card: {
    position: 'relative',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
    width: 250,
    height: 'max-content',
    margin: 8
  },
  overlay: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    cursor: 'pointer'
  },
  image: {
    width: '100%',
    height: 180,
  },
  infoWrapper: {
    padding: 10
  },
  text: {
    lineHeight: '1.5em'
  }
}

const Product = ({ id, thumbnail, name, price }) => {
  return (
    <div style={myStyles.card}>
      <Link to={`/order/${id}`}>
        <div style={myStyles.overlay} className="overlay"></div>
      </Link>
      <img style={myStyles.image} src={`/assets/${thumbnail}`} alt="img" />
      <div style={myStyles.infoWrapper} className="info">
        <h4 style={myStyles.text}>{name}</h4>
        <p>{`Rp. ${price}`}</p>
      </div>
    </div>
  )
}

Product.defaultProps = {
  id: '',
  name: 'Product name',
  price: 0
}

export default Product
