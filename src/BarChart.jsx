import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';
import axios from 'axios';

const BarChart = () => {
  const [firstValue, setValue] = useState([]) 
useEffect(() => {
  get()
}, [])

  const get =()=>{
    axios.get("http://localhost:3000/barchart").then((res)=>{
      console.log("reds",res.data);
      setValue(res.data)
    })
  }
  const data = firstValue;
  // const data =  [
  //   {
  //     type: 'jan',
  //     sales: 38,
  //   },
  //   {
  //     type: 'feb',
  //     sales: 52,
  //   },
  //   {
  //     type: 'march',
  //     sales: 61,
  //   },
  //   {
  //     type: 'april',
  //     sales: 145,
  //   },
  //   {
  //     type: 'may',
  //     sales: 48,
  //   },
  //   {
  //     type: 'june',
  //     sales: 38,
  //   },
  //   {
  //     type: 'july',
  //     sales: 38,
  //   },
  //   {
  //     type: 'august',
  //     sales: 38,
  //   },
  // ];
  const config = {
    data,
    xField: 'sales',
    yField: 'type',
    barWidthRatio: 0.8,
    meta: {
      type: {
        alias: '',
      },
      sales: {
        alias: '',
      },
    },
  };
  return <Bar {...config} />;
};
export default BarChart;
