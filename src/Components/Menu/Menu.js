import React from 'react'

import {CallsMenu, DialerList} from "./data.js"
import MenuItem from "./MenuItem/MenuItem.js"
import DialerItem from "./DialerItem/DialerItem"
import "./menuStyle.css"

const Menu = () => {
	const data = CallsMenu;
	const	dialerList = DialerList;
  return (
		<div className="menu">
			<div className="menu-list">
			<label className="items-label">Calls</label>
			<div className="menu-items">
				{data.map((item) => {
					return <MenuItem item={item} />
				})}
			</div>
			</div>
			<div className="menu-dialer">
				<label className="dialer-label">Make a Call</label>
				<div className="dialer-search">
					<input placeholder="Type a name" />
				</div>
				<div className="dialer-suggested">
						<label className="suggested-label">Suggested</label>
					<div className="suggested-list">
						{dialerList.map((item) => {
							return <DialerItem item={item}/>
						})}
					</div>
				</div>
				<div className="dialer-bottom">
					<div className="dialer-bottom-icon">
						<i class="fi-rr-microphone" />
					</div>
					<div className="dialer-bottom-icon">
						<i class="fi-rr-play-alt" />
					</div>
				</div>
			</div>
    </div>
  )
}

export default Menu
