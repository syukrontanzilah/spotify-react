import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{playlists}, dispatch]= useDataLayerValue()
    return (
        <div className="sidebar">
            <img 
            className="sidebar__logo"
            src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png" alt="spotify"/>
            
            <SidebarOption
            title="Home"
            Icon ={HomeIcon}
            />
              <SidebarOption
            title="Search"
            Icon ={SearchIcon}
            />
              <SidebarOption
            title="Your Library"
            Icon ={LibraryMusicIcon}
            />
            <br/>
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr/>

            {/* {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name}/>
            ))} */}

            <SidebarOption
            title="My Subscriptions Playlist"
            />

            <SidebarOption
            title="Hip hop"
            />
              <SidebarOption
            title="Rock"
            />
              <SidebarOption
            title="R&B"
            />

            <SidebarOption
            title="Romantic Song"
            />
              <SidebarOption
            title="Jazz"
            />
                 <SidebarOption
            title="Classic"
            />
              <SidebarOption
            title="Music 90"
            />
                 {/* <SidebarOption
            title="Japanese"
            />
              <SidebarOption
            title="Arabian and East Music"
            /> */}

        </div>
    )
}

export default Sidebar
