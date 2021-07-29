import React from 'react'

import "./headerStyle.css"

const Header = () => {
  return (
    <div className="header ">
      <div className="header-menu">
        <i class="fi-rr-layout-fluid"></i>  
      </div>
      <div className="header-left-part">
        <label className="header-label">Microsoft Teams</label>
      </div>
      <div className="header-main">
        <div className="header-search">
          <i class="fi-rr-search"></i>
          <input placeholder="Search" />
        </div>
        <div className="header-profile">
          <div className="header-options">
            <i class="fi-rr-menu-dots"></i>
          </div>
          <img className="header-avatar" src="https://image.flaticon.com/icons/png/512/3003/3003035.png" />
        </div>

      </div>
    </div>
  )
}

export default Header
