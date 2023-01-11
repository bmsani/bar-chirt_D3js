import React from 'react';

const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) => {
    return (
        <>
            {yScale.ticks().map(tickValue =>
                <g
                    className='tick'
                    key={tickValue}
                    transform={`translate(0, ${yScale(tickValue)})`}>
                    <line x2={innerWidth}/>
                    <text x={-tickOffset} dy=".32em" style={{ textAnchor: 'end' }}>{tickValue}</text>
                </g>

            )}
        </>
    );
};

export default AxisLeft;