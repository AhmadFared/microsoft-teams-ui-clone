import React from 'react'
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar"
import Menu from "./Components/Menu/Menu"
import Main from "./Components/Main/Main"

import './App.css';

function App() {
  return (    
  <div className="app-container">
  <Header />
  <div className="app-body">
    <div className="app-sidebar">
      <Sidebar />
    </div>
    <div className="app-menu">
      <Menu />
    </div>
    <div className="app-main">
      <Main />
    </div>
  </div>
</div>
  );
}

export default App;
