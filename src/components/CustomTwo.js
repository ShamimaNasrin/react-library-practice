import React from 'react';
import "./../custom.css";

const CustomTwo = ({ data }) => {

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

    const backgroundColor = getColor(data.score);

    return (
        <div
            className="px-1 py-1 rounded text-white mx-auto"
            style={{
                backgroundColor: backgroundColor,
                width: '130px',
                height: '70px',
            }}
        >
            <div
                className="d-flex w-100 h-100"
            >
                <div
                    className="h-100 d-flex justify-content-center align-items-center rounded emPhoto"
                style={{ width: '35px', }}
                >
                    <img className=' img-fluid object-fit-cover' src={data.photo} alt=".." />
                </div>
                <div className="d-flex flex-column justify-content-between align-items-start ms-2">
                    <p className=" text-break nameText mb-0">{data.designation}</p>
                    <p className=" text-break nameText mb-0">{data.name}</p>
                    <p className="small text-break mb-0">{data.score}%</p>
                </div>
            </div>

        </div>
    );
};

export default CustomTwo;