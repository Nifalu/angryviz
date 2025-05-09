// src/components/panels/ConfigurationPanel.jsx
import React from 'react';

const ConfigurationPanel = () => {
    return (
        <div className="w-64 border-l border-border bg-card flex flex-col"> {/* Changed w-80 to w-64 (16rem/256px). Added flex flex-col */}
            <div className="px-4 py-3 border-b border-border">
                <h2 className="text-lg font-semibold text-card-foreground">Configuration & Results</h2>
            </div>
            <div className="p-4 overflow-y-auto flex-grow">
                <p className="text-sm text-muted-foreground">
                    This panel will display node configurations and analysis results.
                    Add more content here to test scrolling.
                </p>
            </div>
        </div>
    );
};

export default ConfigurationPanel;
