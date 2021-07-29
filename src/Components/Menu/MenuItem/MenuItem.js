import React from "react"

import "./menuitemStyle.css"

const MenuItem = ({item, isActive}) => {
		const classItem = isActive?"item-active menu-item":"menu-item"
	return(<div className={classItem}>
			<div className="item-icon">{item.icon}</div>
			<label className="item-label">{item.name}</label>
		</div>)
}

export default MenuItem
