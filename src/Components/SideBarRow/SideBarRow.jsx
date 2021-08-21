import React from 'react';
import "./SideBarRow.css";

function SideBarRow({ selected, Icon, title }) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            <Icon className="sidebarRow__icon" />  
            {/* allows prop to be passed; if selected then add the selected class */}
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SideBarRow;
