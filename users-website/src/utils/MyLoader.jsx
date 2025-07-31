import React from 'react'
import { FaSpinner } from "react-icons/fa";


function MyLoader() {
  return (
      <div className="flex justify-center items-center h-[60vh] w-full">
        <FaSpinner className="animate-spin text-3xl text-[#dd6d41ea]" />
      </div>
 
  )
}

export default MyLoader