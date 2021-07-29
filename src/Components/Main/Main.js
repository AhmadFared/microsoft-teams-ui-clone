import React from 'react'

import Contacts from "./data"
import ContactItem from "./ContactItem/ContactItem" 

import "./mainStyle.css"

const Main = () => {
	const contacts = Contacts
  return (
    <div className="main">
			<div className="main-header">
				<label className="main-header-label">Contacts</label>
			</div>
			<div className="main-options">
				<div className="contact-search">
					<input placeholder="Find a contact"/>
					<div className="search-contact-icon">
						<i class="fi-rr-search" />
					</div>
				</div>
				<div className="add-button">
					<div className="add-button-icon">
						<i class="fi-rr-user-add" />
					</div>
					<label className="add-label">Add Contact</label>
				</div>
			</div>
			<div className="main-contact-list">
				{contacts.map((item) => {
					return <ContactItem item={item}/>
				})}
			</div>
    </div>
  )
}

export default Main
