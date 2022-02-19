import React from 'react'
import './styles.css' 
import { BsBell,BsSpeedometer2,BsQuestionCircle,BsFillPeopleFill ,BsFillPersonPlusFill } from "react-icons/bs";
import { CgProfile, } from "react-icons/cg";
import { ImTextColor } from "react-icons/im";
import { AiOutlineTable ,AiOutlineMenuUnfold } from "react-icons/ai";
import { FiSearch,FiSettings } from "react-icons/fi";
import { RiBrushLine } from "react-icons/ri";

export const Sidebar = () => {
  return (
    <div>
         <div id="side">
      <div>
      <ul>
        <li className='sideli'><ImTextColor/></li>
        <li  className='sideli'><BsSpeedometer2/></li>
        <li  className='sideli'><AiOutlineTable/></li>
        <li  className='sideli'><FiSearch/></li>
        <li  className='sideli'><RiBrushLine/></li>
        <li  className='sideli'><BsFillPeopleFill/></li>
        <li  className='sideli'><BsFillPersonPlusFill/></li>
      </ul>
      </div>
      <div id="d2">
      <ul>
        <li  className='sidelibottom'><BsQuestionCircle/></li>
        <li  className='sidelibottom'><FiSettings/></li>
        <li  className='sidelibottom'><AiOutlineMenuUnfold/></li>
      </ul>
      </div>     
    </div>
    </div>
  )
}
export default Sidebar;