import React from "react";

import "./dialeritemStyle.css"

const DialerItem = ({item}) =>{

		return(
			<div className="dialer-item">
				<img src={item.avatar} className="dialer-item-avatar"/>	
				<div className="dialer-item-info">
					<label className="dialer-item-title">{item.name}</label>
					<label className="dialer-item-subtitle">{item.type}</label>
				</div>
				<div className="dialer-item-icons">
					<div className="dialer-item-icon"><i class="fi-rr-microphone"/></div>
					<div className="dialer-item-icon">
						<i class="fi-rr-play-alt" />
					</div>
				</div>
			</div>)
}

export default DialerItem
