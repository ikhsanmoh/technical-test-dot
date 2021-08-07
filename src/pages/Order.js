import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// import axios from 'axios'

import { API } from '../config/api'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import productsFakeData from '../fake-data/ProductsData'

const myStyles = {
  productOverviews: {
    display: 'flex',
  },
  productImage: {
    width: 200,
  },
  productDetails: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 15,
    lineHeight: '1.5em',
  },
  shippingForm: {
    marginTop: 30,
    marginBottom: 20
  },
  shopInfo: {
    marginTop: 20,
    marginBottom: 20
  },
  cost: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  horSeparator: {
    marginTop: 30,
    marginBottom: 10
  },
  strongText: {
    fontWeight: 'bold'
  }
}

const Order = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    senderName: '',
    receiverName: '',
    carrier: '',
    originCity: '',
    destinationCity: '',
    cost: '',
  })

  useEffect(() => {
    loadCities()
  }, [])

  if (!id) return null

  const product = productsFakeData.find(p => p.id === +id)

  const shippingMethods = [
    { name: 'JNE', val: 'jne' },
    { name: 'POS', val: 'pos' },
    { name: 'TIKI', val: 'tiki' }
  ]

  const CITIES = [
    {
      name: "Aceh Barat",
      val: "1",
    },
    {
      val: "2",
      name: "Aceh Barat Daya",
    },
    {
      val: "3",
      name: "Aceh Besar",
    },
  ]

  const loadCities = async () => {
    try {
      const response = await API.get('province')
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  }

  const payHandler = () => {
    const { receiverName, destinationCity, carrier } = formData
    if (receiverName === '') return alert('Please enter receiver name')
    if (destinationCity === '') return alert('Please select receiver city')
    if (carrier === '') return alert('Please select carrier')
  }

  const changeHandler = e => {
    setFormData(prevUser => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <section>
      <div style={myStyles.productOverviews} className="product-overview">
        <img style={myStyles.productImage} src={`/assets/${product.thumbnail}`} alt="img" />
        <div style={myStyles.productDetails} className="info-wrapper">
          <p><span style={myStyles.strongText}>Name: </span>{product.name}</p>
          <p><span style={myStyles.strongText}>Price: </span>Rp. {product.price}</p>
          <p><span style={myStyles.strongText}>Weight: </span>{product.weight} Gram</p>
        </div>
      </div>
      <div style={myStyles.shippingForm} className="shipping-form">
        <h1>Shipping Form</h1>
        <div style={myStyles.shopInfo} className="shop-info">
          <p><span style={myStyles.strongText}>Sender Name:</span> Ikhsan Shop</p>
          <p><span style={myStyles.strongText}>Location:</span> Jakarta Selatan</p>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <FormInput
            label="Receiver Name"
            name="receiverName"
            value={formData.receiverName}
            onChange={changeHandler}
            placeholder="Enter receiver name..."
          />
          <FormInput
            type="select"
            selectOptions={CITIES}

            label="Receiver City"
            name="destinationCity"
            value={formData.destinationCity}
            onChange={changeHandler}
            placeholder="Enter receiver city..."
          />
          <FormInput
            label="Choose Carrier"
            type="select"
            name="carrier"
            value={formData.carrier}
            onChange={changeHandler}
            selectOptions={shippingMethods}
          />
        </form>
        <hr style={myStyles.horSeparator} />
        <div style={myStyles.cost} className="cost">
          <h3>Cost</h3>
          <p>Rp. {formData.cost || 0}</p>
        </div>
        <Button
          styles={{
            float: 'right',
            width: 100,
            backgroundColor: '#61B15A',
            color: '#fff'
          }}
          type="button"
          label="Pay"
          onClick={payHandler}
        />
      </div>
    </section>
  )
}

export default Order
