import React from "react";

import SidebarItem from "./SidebarItems/SidebarItem";
import {
  SidebarTop,
  SidebarMore,
  SidebarBottom,
} from "./data.js";

import "./sidebarStyle.css";

const Sidebar = () => {
  const ItemsTop = SidebarTop;
  const ItemsMore = SidebarMore;
  const ItemsBottom = SidebarBottom;
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div>
          {ItemsTop.map((item) => {
            return (
              <SidebarItem
                item={item}
                isActive={item.name === "Calls" ? true : false}
              />
            );
          })}
        </div>
      </div>
      <div className="sidebar-bottom">
        {ItemsBottom.map((item) => {
          return <SidebarItem item={item}/>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
