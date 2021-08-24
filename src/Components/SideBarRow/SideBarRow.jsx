import React from 'react';
import "./SideBarRow.css";

function SideBarRow({ selected, Icon, title }) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            {/* allows prop to be passed; if selected then add the selected class */}
            <Icon className="sidebarRow__icon" />  
            
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SideBarRow;
