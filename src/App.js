import { extent, timeFormat, max, scaleLinear, scaleTime, ticks } from "d3";
import AxisBottom from "./component/AxisBottom";
import AxisLeft from "./component/AxisLeft";
import Bars from "./component/Bars";
import useData from './component/useData'


const width = 1260;
const height = 606;
const margin = { left: 90, top: 30, right: 30, bottom: 70 }
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 50;



function App() {
  const data = useData();
  if (!data) {
    return <pre>...loading</pre>
  }

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const xValue = d => d.timestamp
  const xAxisLabel = 'Time';
  const yValue = d => d.temperature
  const yAxisLabel = 'Temperature';


  const xAxisTickFormat = timeFormat("%a");

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight,0])
    .nice();


  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
    
        <AxisLeft
          yScale={yScale}
          innerWidth={innerWidth}
          tickOffset={7}
        />
        <text 
        className="axis-label"
        textAnchor="middle" 
        transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}
        >
        {yAxisLabel}
        </text>
""
        <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisTickFormat} tickOffset={7} />

        <text className="axis-label" x={innerWidth / 2} y={innerHeight + xAxisLabelOffset}>{xAxisLabel}</text>
        <Bars
          data={data}
          xScale={xScale}
          yScale={yScale}
          innerHeight={innerHeight}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          
        />
      </g>
    </svg>
  )
}

export default App;
