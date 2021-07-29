import React from "react"

import "./contactitemStyle.css"

const ContactItem = ({item}) =>{
	
	return(
		<div className="contact-card">
			<div className="contact-top">
				<img src={item.avatar} className="contact-avatar"/>
				<div className="contact-info">
					<label className="contact-title">{item.name}</label>
					<label className="contact-subtitle">{item.type}</label>
				</div>
			</div>
			<div className="contact-icons">
				<div className="contact-icon">
					<i class="fi-rr-microphone" />
				</div>
				<div className="contact-icon">
					<i class="fi-rr-play-alt"/>
				</div>
				<div className="contact-icon">
					<i class="fi-rr-menu-dots"/>
				</div>
			</div>
		</div>)
}

export default ContactItem
