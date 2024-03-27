import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
     const data = [{
        desc:"Hey my name is Ashutosh Singh and I am trying to learn props and destructuring.",
        filesize:".9mb",
        close: true,
        tag:
        {isOpen:false, tagTitle:"Download Now",tagColor:"black"},

     },
     {
        desc:"This is a data which is stored in  a array in the form of Objects.",
        filesize:".5mb",
        close: false,
        tag:
        {isOpen:true, tagTitle:"Download Now",tagColor:"#48929B"},

     },
     {
        desc:"I am using array map feature to send these data as props.",
        filesize:".4mb",
        close: true,
        tag:
        {isOpen:true, tagTitle:"Upload Now",tagColor:"#4D8FAC"},

     }]

     const ref = useRef()


  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
     </div>
  )
}

export default Foreground