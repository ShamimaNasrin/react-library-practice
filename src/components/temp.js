import React from 'react';
import styled from 'styled-components';  // Import the 'styled' function from styled-components
import { Tree, TreeNode } from 'react-organizational-chart';

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const D3OrgTestOne = () => {
  return (
    <div>
      <Tree label={<StyledNode>Root</StyledNode>}>
        <TreeNode label={<StyledNode>Child 1</StyledNode>}>
          <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
        </TreeNode>
        <TreeNode label={<StyledNode>Child 2</StyledNode>}>
          <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
            <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
            <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
          </TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode>Child 3</StyledNode>}>
          <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
          <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
        </TreeNode>
      </Tree>
    </div>
  );
};

export default D3OrgTestOne;
