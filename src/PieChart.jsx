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
  // const data =  [
  //   {
  //     type: 'Airtel',
  //     value: 27,
  //   },
  //   {
  //     type: 'Jio',
  //     value: 25,
  //   },
  //   {
  //     type: 'Bsnl',
  //     value: 18,
  //   },
  //   {
  //     type: 'Vi',
  //     value: 15,
  //   },
  //   {
  //     type: 'Network',
  //     value: 10,
  //   },
  //   {
  //     type: 'Net',
  //     value: 5,
  //   },
  // ];
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
