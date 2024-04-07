import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import RootNode from './RootNode';
import CustomTwo from './CustomTwo';

const generateTree = (employeeId, data) => {
    const children = data
        .filter(d => d.reportingManagerId === employeeId)
        .map(d => (
            <TreeNode key={d.empId} label={<CustomTwo data={d} />}>
                {generateTree(d.empId, data)}
            </TreeNode>
        ));

    return children.length === 0 ? null : children;
};

const D3OrgTestOne = ({ data }) => {
    const rootData = data.find(d => d.order === 'root');

    return (
        <div>
            <Tree label={<RootNode data={rootData} />}>

                {generateTree(rootData.empId, data)}

                {/* <TreeNode label={<CustomTwo data={data[1]} />}>
                    <TreeNode label={<div>Grand Child</div>} />
                </TreeNode>
                {
                    data?.map((d, i) => <TreeNode label={<CustomTwo data={d} />}>
                        <TreeNode label={<div>Grand Child</div>} />
                        <TreeNode label={<div>Grand Child</div>} />
                    </TreeNode>)
                } */}

            </Tree>
        </div>
    );
};

export default D3OrgTestOne;

// const data = [
//     { order: 'root', name: 'Jane Doe', empId: '0021', reportingManagerId: '0000', designation: 'CEO', photo: '🤓', score: '50' },
//     { order: 'child1', name: 'Tyler Weary', empId: '0721', reportingManagerId: '0021', designation: 'Designer', photo: '🤓', score: '90' },
//     { order: 'child2', name: 'Kristi Price', empId: '0822', reportingManagerId: '0721', designation: 'QA', photo: '🤩', score: '110' },
//     { order: 'child3', name: 'Harry', empId: '0081', reportingManagerId: '0822', designation: 'UI/UX', photo: '🤩', score: '110' },
//     { order: 'child2', name: 'Henry', empId: '1021', reportingManagerId: '0651', designation: 'Developer', photo: '🤩', score: '110' },
//     { order: 'child1', name: 'John', empId: '0651', reportingManagerId: '0021', designation: 'Designer', photo: '🤓', score: '90' },
//     { order: 'child3', name: 'Alex', empId: '5021', reportingManagerId: '0822', designation: 'Soft Eng', photo: '🤩', score: '110' },
//     { order: 'child3', name: 'Alen', empId: '0121', reportingManagerId: '0822', designation: 'QA', photo: '🤩', score: '110' },
// ];

// <Tree label={<RootNode data={data[0]} />}>
//     <TreeNode label={<CustomTwo data={data[1]} />}>
//         <TreeNode label={<CustomTwo data={data[4]} />} />
//     </TreeNode>
// </Tree>