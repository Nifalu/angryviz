import React from 'react';

const ConfigurationPanel = () => {
    return (
        <div className="w-80 border-l border-border p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Configuration & Results</h2>
            <p className="text-sm text-muted-foreground">
                This panel will display node configurations and analysis results.
            </p>
        </div>
    );
};

export default ConfigurationPanel;