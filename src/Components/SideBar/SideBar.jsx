import React from 'react';
import './SideBar.css';
import SideBarRow from '../SideBarRow/SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';




function SideBar() {
    return (
        <div className="sidebar">
            <SideBarRow selected Icon={HomeIcon} title="Home" />
            <SideBarRow Icon={WhatshotIcon} title="Trending" />
            <SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title="Library" />
            <SideBarRow Icon={HistoryIcon} title="History" />
            <SideBarRow Icon={OndemandVideoIcon} title="Your Videos" />
            <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
            <hr />
        </div>
    )
}

export default SideBar
