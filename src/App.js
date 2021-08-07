import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/base/Header'
import Footer from './components/base/Footer'
import Login from './pages/Login'
import Products from './pages/Products';
import Order from './pages/Order'
import PrivateRoute from './components/PrivateRoute'
import './App.css'

function App() {
  const [user, setUser] = useState({
    isLogin: true,
    data: {}
  })

  const onLogout = () => {
    setUser({
      isLogin: false,
      data: {}
    })
  }

  return (
    <Router>
      <Header user={user} logout={onLogout} />
      <main style={{ marginTop: 20 }} className='container'>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          <PrivateRoute
            path='/order/:id'
            children={() => <Order />}
            user={user}
          />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
