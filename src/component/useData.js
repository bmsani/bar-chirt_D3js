import { csv } from 'd3';
import { useEffect, useState } from 'react';

const csvUrl = 'https://gist.githubusercontent.com/netj/8836201/raw/6f9306ad21398ea43cba4f7d537619d0e07d5ae3/iris.csv'

const useData = () => {
    
    const [data, setData] = useState(null)
    
        useEffect(() => {
          const row = d => {
            d['sepal.length'] = +d['sepal.length']
            d['sepal.width'] = +d['sepal.width']
            d['petal.length'] = +d['petal.length']
            d['petal.width'] = +d['petal.width']
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