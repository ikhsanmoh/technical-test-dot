import { Redirect } from 'react-router-dom'
import { useState } from 'react'

import FormInput from '../components/FormInput'
import Button from '../components/Button'

const Login = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, password } = formData
    if (username === '') return alert('Please enter a username')
    if (password === '') return alert('Please enter a password')

    setUser({
      isLogin: true,
      data: { username }
    })
  }

  const changeHandler = e => {
    setFormData(prevUser => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value
      }
    })
  }

  return user.isLogin ? (
    <Redirect to='/' />
  ) : (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={changeHandler}
          placeholder="Enter username..."
          required
        />
        <FormInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password..."
          required
        />
        <Button
          styles={{ backgroundColor: '#2541B2', color: '#fff' }}
          type="submit"
          label="Login"
        />
      </form>
    </div>
  )
}

export default Login
