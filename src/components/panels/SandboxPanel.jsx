import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [];
const initialEdges = [];

const SandboxPanel = () => {
    return (
        <div className="flex-1 flex flex-col">
            <h2 className="text-lg font-semibold p-4 pb-2">Pipeline Builder</h2>
            <div className="flex-1 bg-background border border-border m-4 mt-0 relative">
                <ReactFlow
                    nodes={initialNodes}
                    edges={initialEdges}
                    fitView
                >
                    <Controls />
                    <Background type="dots" gap={12} size={1} />
                </ReactFlow>
            </div>
        </div>
    );
};

export default SandboxPanel;