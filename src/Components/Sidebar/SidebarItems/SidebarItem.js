import React from "react";

import "./sidebaritemStyle.css";

const SidebarItem = ({ item, isActive }) => {
  const classItem = isActive ? "sidebar-item active" : "sidebar-item";
  return (
    <div className={classItem}>
      <div className="sidebar-icon">{item.icon}</div>
      {item.name && <label className="sidebar-label">{item.name}</label>}
    </div>
  );
};

export default SidebarItem;
