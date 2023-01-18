import React from 'react';
import { curveNatural, line } from 'd3';

const Bars = ({ data, xScale, yScale, xValue, yValue, tooltipFormat }) => {
  return (
    <g className='bars'>
      <path
        d={line()
          .x(d => xScale(xValue(d)))
          .y(d => yScale(yValue(d)))
          .curve(curveNatural)(data)} />
      {/* {data.map(d =>
        <circle
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r={3}
        >
          <title>{tooltipFormat(xValue(d))}</title>
        </circle>
        )} */}
    </g>
  );
};

export default Bars;