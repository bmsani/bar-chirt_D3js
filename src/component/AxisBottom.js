import React from 'react';

const AxisBottom = ({ xScale, innerHeight, tickFormat, tickOffset = 3 }) => {
    return (
        <>
            {xScale.ticks().map(tickValue => (
                <g className='tick'
                    key={tickValue}
                    transform={`translate(${xScale(tickValue)},0)`}>
                    <line y2={innerHeight} />
                    <text
                        key={tickValue}
                        y={innerHeight + tickOffset} 
                        dy=".71em"
                        style={{ textAnchor: 'middle' }}>
                        {tickFormat(tickValue)}
                    </text>
                </g>

        
    ))
}
        </>
    );
};

export default AxisBottom;