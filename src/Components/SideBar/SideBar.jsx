import React from 'react';
import './SideBar.css';
import SideBarRow from '../SideBarRow/SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function SideBar() {
    return (
        <div className="sidebar">
            <SideBarRow Icon={HomeIcon} title="Home" />
            <SideBarRow Icon={WhatshotIcon} title="Trending" />
            <SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
        </div>
    )
}

export default SideBar
