import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const PieChart = () => {
  const [first, setfirst] = useState([])

  useEffect(() => {
  val();
  }, [])
  
  const val=()=>{
    axios.get("http://localhost:3000/data").then((res)=>{
      console.log(res.data);
      setfirst(res.data)
    })
  }
  const data = first;
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};
export default PieChart;
