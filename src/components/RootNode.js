import React from 'react';

const RootNode = ({ data }) => {
    return (
        <div
            className="rounded border mx-auto"
            style={{
                backgroundColor: '#f5f5f5',
                width: '90px',
                height: '120px',
            }}
        >
            <div
                className="px-1 py-1 d-flex flex-column w-100 h-100 justify-content-center align-items-center"
                // style={{
                //     backgroundColor: '#f5f5f5',
                //     width: '90px',
                //     height: '120px',
                // }}
            >
                <div
                    className="d-flex justify-content-center align-items-center rounded emPhoto mx-auto"
                // style={{ backgroundImage: `url(${data.photo})` }}
                >
                    <img className='img-fluid object-fit-cover ' src={data.photo} alt=".." />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center w-75">
                    <p className="fs-6 text-break nameText mb-0">{data.designation}</p>
                    <p className=" text-break nameText mb-0">{data.name}</p>
                </div>
            </div>
        </div>
    );
};

export default RootNode;