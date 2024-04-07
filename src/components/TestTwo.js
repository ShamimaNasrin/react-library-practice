import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MarkerType, Controls } from 'reactflow';

import 'reactflow/dist/base.css';
import CustomNode from './CustomNode';

const nodeTypes = {
    custom: CustomNode,
};

const initNodes = [
    {
        id: '1',
        type: 'custom',
        data: { name: 'Jane Doe', designation: 'CEO', photo: '😎', score: '50' },
        position: { x: 0, y: 50 },
    },
    {
        id: '2',
        type: 'custom',
        data: { name: 'Tyler Weary', designation: 'Designer', photo: '🤓', score: '90' },
        position: { x: -200, y: 200 },
    },
    {
        id: '3',
        type: 'custom',
        data: { name: 'Kristi Price', designation: 'Developer', photo: '🤩', score: '110' },
        position: { x: 0, y: 200 },
    },
    {
        id: '4',
        type: 'custom',
        data: { name: 'Kristi', designation: 'Developer', photo: '🤩', score: '75' },
        position: { x: 200, y: 200 },
    },
];

// const initEdges = [
//     {
//         type: 'step',
//         id: 'e1-2',
//         source: '1',
//         target: '2',
//         markerEnd: {
//             type: MarkerType.Arrow,
//             width: 20,
//             height: 20,
//             color: '#000000',
//         },
//         style: {
//             strokeWidth: 1,
//             stroke: '#000000',
//         },
//     },
//     {
//         type: 'step',
//         id: 'e1-3',
//         source: '1',
//         target: '3',
//         markerEnd: {
//             type: MarkerType.Arrow,
//             width: 20,
//             height: 20,
//             color: '#000000',
//         },
//         style: {
//             strokeWidth: 1,
//             stroke: '#000000',
//         },
//     },

//     {
//         type: 'step',
//         id: 'e1-4',
//         source: '1',
//         target: '4',
//         markerEnd: {
//             type: MarkerType.Arrow,
//             width: 20,
//             height: 20,
//             color: '#000000',
//         },
//         style: {
//             strokeWidth: 1,
//             stroke: '#000000',
//         },
//     },
// ];




// Dynamically generate initEdges based on initNodes

const initEdges = [];

for (let i = 1; i < initNodes.length; i++) {
    const edge = {
        type: 'step',
        id: `e1-${i + 1}`,
        source: '1',
        target: initNodes[i].id,
        markerEnd: {
            type: MarkerType.Arrow,
            width: 20,
            height: 20,
            color: '#000000',
        },
        style: {
            strokeWidth: 1,
            stroke: '#000000',
        },
    };
    initEdges.push(edge);
}

// console.log(initEdges);

const FlowTwo = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    return (
        <div style={{ height: '70vh', width: '60%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                className=""
            >
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default FlowTwo;