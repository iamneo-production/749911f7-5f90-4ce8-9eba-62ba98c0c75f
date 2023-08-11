import axios from 'axios'
import React, { useState } from 'react'
import "./style.css"

const Registration = () => {
  const [userName, setUserName] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [errorMessage, setErrorMessage] = useState(''),

    handleRegistration = async () => {
      try {
        const response = await axios.post('https://8080-ffccfffadcaefbecfbaffffddddabcdbfbebdb.premiumproject.examly.io/profile', {
          userName,
          email,
          password,
        })

        console.log('User registered:', response.data)
        // TODO: Redirect the user to the login page or another route here
      } catch (error) {
        if (error.response.status === 409) {
          setErrorMessage('User with this email already exists.')
        } else {
          setErrorMessage('An error occurred. Please try again later.')
        }
      }
    },

    validateForm = () => {
      return userName !== '' && email !== '' && password !== ''
    }

  return (
    <>
      <h2>User Registration</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <label>
        User Name:
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleRegistration} disabled={!validateForm()}>
        Register
      </button>
    </>
  )
}

export default Registration