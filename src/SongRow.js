import React from 'react'
import './SongRow.css'

function SongRow({track, album, image}) {
    return (
        <div className="songRow">
            <img src={image}/>
            <div className="songRow__info">
        <h1>{track}</h1>
         <p>{album}</p>
            </div>
 
        </div>
    )
}

export default SongRow
