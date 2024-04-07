import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const getColor = (score) => {
  const numericScore = parseFloat(score);

  if (numericScore < 80) {
    return '#f21616';//red
  } else if (numericScore >= 80 && numericScore < 100) {
    return '#081e9e';//blue
  } else {
    return '#5fbd5b';//green
  }
};

function CustomNode({ data }) {
  const backgroundColor = getColor(data.score);

  return (
    <div
      className="px-1 py-1 rounded text-white"
      style={{
        backgroundColor: backgroundColor,
        width: '120px',
        height: '70px',
      }}
    >
      <div
        className="d-flex w-100 h-100"
      >
        <div
          className="h-100 d-flex justify-content-center align-items-center rounded w-25 emPhoto"
        // style={{ backgroundImage: `url(${data.photo})` }}
        >
          <img className=' img-fluid object-fit-cover' src={data.photo} alt=".." />
        </div>
        <div className="d-flex flex-column justify-content-between ms-2 w-75">
          <p className=" text-break nameText mb-0">{data.designation}</p>
          <p className=" text-break nameText mb-0">{data.name}</p>
          <p className="small text-break mb-0">{data.score}%</p>
        </div>
      </div>
      <Handle type="target" position={Position.Top} className="" style={{ width: '0px' }} />
      <Handle type="source" position={Position.Bottom} className="" style={{ width: '0px' }} />
    </div>
  );
}

export default memo(CustomNode);