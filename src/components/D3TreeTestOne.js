import React from 'react';
import Tree from 'react-d3-tree';

const D3TreeTestOne = () => {

    const data = [
        { order: 'root', name: 'Jane Doe', designation: 'CEO', photo: 'https://firebasestorage.googleapis.com/v0/b/pluxi-3716a.appspot.com/o/CL0001%2FBR0001%2FTraining%2FE001111%2FScreenshot%202024-02-02%20145755.png?alt=media', score: '50' },
        { order: 'parent', name: 'Tyler Weary', designation: 'Designer', photo: '🤓', score: '90' },
        { order: 'child', name: 'Kristi Price', designation: 'Developer', photo: '🤩', score: '110' },
        { order: 'grand child', name: 'Kristi Price', designation: 'Developer', photo: '🤩', score: '110' },
    ];

    const orgChart = {
        name: 'CEO',
        children: [
            {
                name: 'Manager',
                attributes: {
                    department: 'Production',
                    score: '50',
                },
                children: [
                    {
                        name: 'Foreman',
                        attributes: {
                            department: 'Fabrication',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                    {
                        name: 'Foreman',
                        attributes: {
                            department: 'Assembly',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                ],
            },
        ],
    };

    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{ height: '70vh', width: '90%' }}>
            <Tree data={orgChart} />
        </div>
    );
};

export default D3TreeTestOne;