import React from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import Sidebar from './Sidebar'
import { BsBell } from "react-icons/bs";
import { CgProfile, } from "react-icons/cg";
import './styles.css' 

import Cards from './Cards'
export const DashBoard = () => {
  return (
    <div>
      <Sidebar/>
    <div style={{ backgroundColor: "whitesmoke", "padding": "10px" ,"marginTop":"-9px !important","float":"right" ,"width":"90%"}}>
      
      <div class="container mt-3" style={{ backgroundColor: "White",marginTop:"-0px !important" }}>
        <p class="nav justify-content-start" style={{ "width": "fitContent" }}><strong>PO Material</strong></p>
        <ul class="nav justify-content-end" style={{ "width": "auto", "marginTop": "-34px" }}>
          <li class="nav-item">
            <a class="nav-link" href=""><BsBell/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=""><CgProfile/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Alex</a>
          </li>
        </ul> </div>
      <div class="container p-5 my-5  text-black" style={{ backgroundColor: "White" ,marginTop:"5px !important" }} >
        <ul class="nav">
          <li class="nav-item">
            <strong>PO </strong>
          </li>
        </ul>
        <hr />
        <Cards />
      </div>
      <div class="container " style={{ backgroundColor: "White",marginTop:"-41px" }} >
        <ul>
          <li className='lidt' >  Data Entry</li>
          <li className='lidt'>GRN Creation</li>
          <li className='lidt'>GRN Release</li>
          <li className='lidt'>Invoice Received</li>
          <li className='lidt'>Indexing</li>
          <li className='lidt' >Auto Posting</li>
          <li className='lidt'>Process Associate</li>
          <li className='lidt'>manual testing</li>
          <li className='lidt'>SSC QC</li>
          <li  className='lidt'>Payment</li>
        </ul>
      </div>
      <div class="container p-5 my-5  text-black" style={{ backgroundColor: "White" }}>
        <div class="row" >
          <div class="col-md-6" >
            <h6>Invoice By Location</h6>
            <hr />
            <PieChart />
          </div>
          <div class="col-md-6" >
            <h6>All Vendors</h6>
            <hr />
            <BarChart />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default DashBoard 