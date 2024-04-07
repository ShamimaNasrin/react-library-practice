import { useCallback } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    MarkerType,
} from 'reactflow';

import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';

const initialNodes = [
    {
        id: '1',
        position: {
            x: 0,
            y: 0,
        },
        data: {label: 'Node 1', name: 'Jane Doe', job: 'CEO', emoji: '😎' },
    },
    {
        id: '2',
        data: {label: 'Node 2', name: 'Jane Doe', job: 'CEO', emoji: '😎' },
        position: {
            x: 100,
            y: 100,
        },
    },
    {
        id: '3',
        data: {label: 'Node 3', name: 'Jane Doe', job: 'CEO', emoji: '😎' },
        position: {
            x: 0,
            y: 200,
        },
    },
    {
        id: '4',
        data: {label: 'Node 4', name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },
        position: {
            x: 100,
            y: 300,
        },
    },
    {
        id: '5',
        data: {label: 'Node 5', name: 'Kristi Price', job: 'Developer', emoji: '🤩' },
        position: {
            x: 0,
            y: 400,
        },
    },
];

const initialEdges = [
    {
        type: 'straight',
        source: '1',
        target: '2',
        id: '1',
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
        // label: 'straight',
    },
    {
        type: 'step',
        source: '2',
        target: '3',
        id: '2',
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
        // label: 'step',
    },
    {
        type: 'smoothstep',
        source: '3',
        target: '4',
        id: '3',
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
        // label: 'smoothstep',
    },
    {
        type: 'bezier',
        source: '4',
        target: '5',
        id: '4',
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
        // label: 'bezier',
    },
];

const nodeTypes = {
    custom: CustomNode,
  };


const TestOne = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    return (
        <div style={{ height: '70vh', width: '60%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                // onNodesChange={onNodesChange}
                // onEdgesChange={onEdgesChange}
                // onConnect={onConnect}
                fitView
            // minZoom={0.2}
            >
                {/* <Controls /> */}
                {/* <Background /> */}
            </ReactFlow>
        </div>
    );
}

export default TestOne;