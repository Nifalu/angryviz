// src/components/panels/SandboxPanel.jsx
import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import { useTheme } from '../colortheme/ThemeProvider'; // Import your theme hook

const initialNodes = [
    { id: '1', position: { x: 100, y: 100 }, data: { label: 'Node 1' }, type: 'input' },
    { id: '2', position: { x: 300, y: 200 }, data: { label: 'Node 2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const SandboxPanel = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    return (
        <div className="sandbox-panel">
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                fitView
                className={`w-full h-full ${isDark ? 'react-flow__dark' : ''}`}
                // Alternatively, you can use the theme prop directly
                // theme={isDark ? 'dark' : 'light'}
            >
                <Controls />
                <Background
                    variant="dots"
                    gap={16}
                    size={1}
                />
            </ReactFlow>
        </div>
    );
};

export default SandboxPanel;