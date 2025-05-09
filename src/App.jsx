import React from 'react';
import './App.css';
import ConfigurationPanel from './components/panels/ConfigurationPanel';
import SandboxPanel from './components/panels/SandboxPanel';

const App = () => {
    return (
        <div className="app-container">
            <SandboxPanel />
            <ConfigurationPanel />
        </div>
    );
};

export default App;