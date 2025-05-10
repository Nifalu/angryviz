// src/components/panels/ConfigurationPanel.jsx
import React from 'react';

const ConfigurationPanel = () => {
    return (
        <div className="configuration-panel">
            <div className="px-4 py-3 border-b border-border">
                <h2 className="text-lg font-semibold text-card-foreground">Configuration & Results</h2>
            </div>
            <div className="p-6 overflow-y-auto">
                <p className="text-sm text-muted-foreground">
                    This panel will display node configurations and analysis results.
                    Add more content here to test scrolling.
                </p>
            </div>
        </div>
    );
};

export default ConfigurationPanel;