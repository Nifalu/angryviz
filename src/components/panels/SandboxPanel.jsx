// src/components/panels/SandboxPanel.jsx
import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 100, y: 100 }, data: { label: 'Node 1' }, type: 'input' },
    { id: '2', position: { x: 300, y: 200 }, data: { label: 'Node 2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const SandboxPanel = () => {
    return (
        <div className="h-full w-full border-r border-border overflow-hidden bg-background"> {/* bg-background is from your theme */}
            <div className="w-full h-full relative">
                <ReactFlow
                    nodes={initialNodes}
                    edges={initialEdges}
                    fitView
                    className="w-full h-full" // This class applies to the ReactFlow wrapper
                >
                    <Controls />
                    {/* You can explicitly set a color if the default isn't visible against your theme's background */}
                    <Background variant="dots" gap={16} size={1} color="var(--foreground)" />
                    {/* Changed to use theme variable for better contrast, adjust opacity if needed */}
                    {/* For example: <Background variant="dots" gap={16} size={1} style={{ color: 'rgba(var(--foreground-rgb), 0.2)' }} /> */}
                    {/* Or a fixed color: <Background variant="dots" gap={16} size={1} color="#aaa" /> */}
                </ReactFlow>
            </div>
        </div>
    );
};

export default SandboxPanel;