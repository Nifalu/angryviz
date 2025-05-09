import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import './SandboxPanel.css'; // We'll create this CSS file

const initialNodes = [];
const initialEdges = [];

const SandboxPanel = () => {
    return (
        <div className="sandbox-panel">
            <h2>Pipeline Builder</h2>
            <div className="reactflow-wrapper">
                <ReactFlow
                    nodes={initialNodes}
                    edges={initialEdges}
                    fitView
                    attribution={<a href="https://reactflow.dev">reactflow.dev</a>}
                >
                    <Controls />
                    <Background type="grid" variant="dots" />
                </ReactFlow>
            </div>
        </div>
    );
};

export default SandboxPanel;