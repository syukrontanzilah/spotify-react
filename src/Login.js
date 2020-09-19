import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            <img width="100px" src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png" alt="spotify"/>
          <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}

export default Login

