import React from "react";

import "./sidebar.css";

function Sidebar({ menuCollapsed }) {
  return (
    <div
      className="admin-side"
      menuCollapsed={menuCollapsed}
      style={{
        transition: "width 0.2s",
        width: menuCollapsed ? "5rem" : "14rem",
      }}
    >
      <h3>Sidebar</h3>
    </div>
  );
}

export default Sidebar;
