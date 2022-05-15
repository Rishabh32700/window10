import React from 'react'

import './login.css'

import Before__click from './before__click/Before__click'

const Login = () => {

  return (
    <>
        <div className="login">
            <div className="login__container">
                <Before__click />
            </div>
        </div>
    </>
  )
}

export default Login