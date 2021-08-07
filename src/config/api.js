import axios from 'axios'

export const API = axios.create(
  {
    baseURL: "https://api.rajaongkir.com/starter/"
  }
)

API.defaults.headers.common['X-API-Key'] = '7ddd92cb7f6fb4c7b655117e8848132f'
API.defaults.headers.common['Access-Control-Allow-Origin'] = "*"