import { csv } from 'd3';
import { useEffect, useState } from 'react';

const csvUrl = 'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv'

const useData = () => {
    
    const [data, setData] = useState(null)
    
        useEffect(() => {
          const row = d => {
            // d['sepal.length'] = +d['sepal.length']
            // d['sepal.width'] = +d['sepal.width']
            // d['petal.length'] = +d['petal.length']
            // d['petal.width'] = +d['petal.width']
            d.temperature = +d.temperature
            d.timestamp = new Date(d.timestamp);
            return d;
          }
          csv(csvUrl, row).then(setData)

          // csv(csvUrl).then(data => {
          //   data.map(d => {
          //     console.log(d["petal.length"])
          //   })
          // })
        }, [])
    return data;
};

export default useData;