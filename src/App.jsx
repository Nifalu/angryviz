// src/App.jsx
import React from 'react';
import './App.css';
import ConfigurationPanel from './components/panels/ConfigurationPanel';
import SandboxPanel from './components/panels/SandboxPanel';
import HeaderPanel from './components/panels/HeaderPanel.jsx';

const App = () => {
    return (
        <div className="app-container"> {/* Now a CSS Grid container */}
            <div className="header-panel"> {/* This div now acts as the grid container for header items */}
                <HeaderPanel title="AngryViz" />
            </div>
            <div className="main-content"> {/* Grid item in app-container's second row, AND a nested grid */}
                <SandboxPanel />         {/* Grid item in main-content's first column */}
                <ConfigurationPanel />   {/* Grid item in main-content's second column */}
            </div>
        </div>
    );
};
export default App;