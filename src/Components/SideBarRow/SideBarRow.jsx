import React from 'react';
import "./SideBarRow.css";

function SideBarRow({ Icon, title }) {
    return (
        <div className="sidebarRow">
            <Icon />
            <h2>{title}</h2>
        </div>
    )
}

export default SideBarRow;
