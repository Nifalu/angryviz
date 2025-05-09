// src/components/panels/SandboxPanel.jsx
import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 100, y: 100 }, data: { label: 'Node 1' }, type: 'input' },
    { id: '2', position: { x: 300, y: 200 }, data: { label: 'Node 2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

// src/components/panels/SandboxPanel.jsx
const SandboxPanel = () => {
    return (
        <div className="h-full w-full border border-border bg-background rounded-lg overflow-hidden">
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                fitView
                className="w-full h-full"
            >
                <Controls />
                <Background variant="dots" gap={16} size={1} color="var(--foreground)" />
            </ReactFlow>
        </div>
    );
};

export default SandboxPanel;