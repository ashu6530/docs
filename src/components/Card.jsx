import React from 'react'
import { TbFileSmile } from "react-icons/tb";
import { motion } from "framer-motion"
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative flex-shrink-0 w-60 h-72 rounded-[50px]  bg-sky-200/30 px-8 py-10 overflow-hidden">
     <TbFileSmile size="2em" />
     <p className='text-sm mt-5 font-light leading-tight'>{data.desc}</p>
     <div className="footer absolute bottom-0 w-full   left-0 ">
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 rounded-full flex items-center justify-center'style={{backgroundColor:"#4D8FAC"}}>
                {data.close ? <IoIosCloseCircle size="1em" color='#fff' /> : <MdOutlineFileDownload size="1em" color='#fff' /> }
                </span>
               </div>
               {
                data.tag.isOpen && (
                    <div className="tag w-full py-4" style={{backgroundColor:data.tag.tagColor}}>
                    <h3 className='text-sm flex items-center justify-center font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                )
               }

       
     </div>
    </motion.div>
  )
}

export default Card