import React from "react";

import "./navbar.css";

function Navbar({ menuCollapsed, setMenuCollapsed }) {
  return (
    <div className="nav">
      <div style={{ display: "flex" }}>
        <h1 className="logoNav">Navbar - Logo</h1>
        <button type="button" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? "Expandir" : "Colapsar"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
