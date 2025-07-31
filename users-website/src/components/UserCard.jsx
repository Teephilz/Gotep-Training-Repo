import React from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function UserCard({name, email, id}) {
    const navigate= useNavigate();
  return (
    <motion.li 
    onClick={()=>{
     navigate(`/user/${id}`);
    }}
    initial={{opacity:0, x:-20}}
    animate={{opacity:1, x:0}}
   transition={{ duration: 0.8 }}
    whileHover={{ scale: 1.02 }}
   whileTap={{ scale: 0.9 }}
  


     className='w-full h-[50px] flex justify-between items-center py-10 bg-[#ba67275a] hover:bg-[#ba95278f] rounded-lg px-8'>
       <div className=" text-[18px]">
           <p className="text-[16px] md:text-[17px] font-bold py-1">{name}</p>
            <p className="text-[14px] md:text-[15px]">{email}</p>
       </div>
          <div className="text-[13px] md:text-[15px]">
      View
       </div>

    </motion.li>
  )
}

export default UserCard