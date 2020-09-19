import React, {useEffect, useState} from 'react'
import './App.css'
import Login from './Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'

const spotify = new SpotifyWebApi()

const App = () => {
const [token, setToken] = useState(null)

  useEffect(()=>{
const hash = getTokenFromUrl();
window.location.hash = ""
const _token = hash.access_token;
if(_token){
  setToken(_token);
  spotify.setAccessToken(_token);
  spotify.getMe().then(user => {
    console.log('halo', user)
  })
}
console.log("my token: ", token)
  }, [])
  return(
      <div  className="app">

        { token ?(<Player/>) : (<Login/>)}
  

          </div>
  )
}

export default App