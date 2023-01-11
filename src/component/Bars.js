import React from 'react';

const Bars = ({data, xScale, yScale, xValue, yValue, tooltipFormat}) => {
    return (
        <>
            {data.map(d =>
          <circle
            className='bars'
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={10} 
          >
          <title>{tooltipFormat(xValue(d))}</title>
          </circle>)}
        </>
    );
};

export default Bars;