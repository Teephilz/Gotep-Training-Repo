import React from 'react'
import { FaSpinner } from "react-icons/fa";
import {  FourSquare} from 'react-loading-indicators';


function MyLoader() {
  return (
    <div className='flex justify-center items-center h-[60vh]'>
    <FourSquare color="#7f5112" size="medium" text="" textColor="" />
   
    </div>
  
  )
}

export default MyLoader