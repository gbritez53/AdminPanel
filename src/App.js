import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return (
    <div className="">
      <Navbar
        menuCollapsed={menuCollapsed}
        setMenuCollapsed={setMenuCollapsed}
      />
      <Sidebar menuCollapsed={menuCollapsed} />
      <div
        style={{
          transition: "margin-left 0.2s",
          marginLeft: menuCollapsed ? "60px" : "200px",
        }}
      >
        <MainContent />
      </div>
    </div>
  );
}

export default App;
