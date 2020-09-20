import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'

function Body({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue()
    return (
        <div className="body">
           <Header spotify={spotify}/>
           <div className="body__info">
               <img src="https://pbs.twimg.com/media/EH_lBr_W4AEjRqw.jpg" width="100px" alt=""/>
               <div className="body__infoText">
                   <strong>PLAYLIST</strong>
                   <h2>Discover Weekly</h2>
                   {/* <p>{discover_weekly?.description}</p> */}
                   <p>Description ...</p>
               </div>
           </div>

           <div className="body__songs">
            <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffle"/>
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon/>
            </div>


            {/* {discover_weekly?.tracks.items.map(item=>
                <SongRow track= {item.track}/>)} */}

            <SongRow 
            image="https://www.liveabout.com/thmb/LOrvlBK_s299xXQZMkp6Tiaw2Qs=/1014x1014/smart/filters:no_upscale()/maroon-5-5b103f953128340036787a58.jpg"
            track="Girls Like You"
            album="Maroon_5"/>

            <SongRow 
            image="https://pbs.twimg.com/media/D6-xGIWUEAAMLI9.jpg"
            track="Ya Asyiqol Musthofa"
            album="Official Sabyan Gambus"/>

            <SongRow 
            image="https://3.bp.blogspot.com/-z72Hh5C9lPA/WoWBzOZ5agI/AAAAAAACba4/QVeLMIyeBcUBcDqyYgzx9b53ronrCxT2ACLcBGAs/s1600/86CORP%2BSOLO.jpg"
            track="The Bakutumbu"
            album="86 Corp"/>    

            <SongRow 
            image= "https://i.ytimg.com/vi/ZT5LkxpCvzs/maxresdefault.jpg"
            track="Sa'duna Fiddunya"
            album="Nashwa As"/>

            <SongRow 
            image="https://www.liveabout.com/thmb/LOrvlBK_s299xXQZMkp6Tiaw2Qs=/1014x1014/smart/filters:no_upscale()/maroon-5-5b103f953128340036787a58.jpg"
            track="Memories"
            album="Maroon_5"/>

            <SongRow 
            image="https://pbs.twimg.com/media/D6-xGIWUEAAMLI9.jpg"
            track="Deen Assalam"
            album="Official Sabyan Gambus"/>

            <SongRow 
            image="https://cdn.idntimes.com/content-images/community/2020/06/ed516623-98a6-4bd9-84d8-dd1982bb5581-7239cd09500260ac4d294c38f6461d98_600x400.jpg"
            track="Waktu yang salah"
            album="Hanin Diya"/>    

            <SongRow 
            image= "https://i.ytimg.com/vi/ZT5LkxpCvzs/maxresdefault.jpg"
            track="Rouhi Fidak"
            album="Nashwa As"/>

           </div>
        </div>
    )
}

export default Body
