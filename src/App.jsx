import React from 'react';
import './App.css';
import ConfigurationPanel from './components/panels/ConfigurationPanel';
import SandboxPanel from './components/panels/SandboxPanel';
import HeaderPanel from './components/panels/HeaderPanel.jsx';

const App = () => {
    return (
        <div className="flex flex-col h-screen w-screen">
            {/* Navigation Bar */}
            <HeaderPanel title="AngryViz" />

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                <SandboxPanel />
                <ConfigurationPanel />
            </div>
        </div>
    );
};
export default App;