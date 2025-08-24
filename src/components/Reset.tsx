import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

function Reset( { onClose, setCount , bgColor }: {  setCount: (c:number)=>void ; onClose: () => void ;bgColor:string; }) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'  style={{ backgroundColor: bgColor, backdropFilter: 'blur(10px)' }}onClick={onClose}>
       <button className='absolute top-2 right-2 text-white text-6xl hover:scale-110 transition-transform duration-200'  onClick={onClose}><IoIosCloseCircleOutline /></button>
      <div className='flex flex-col gap-5 justify-center items-center ' onClick={(e) => e.stopPropagation()}>
       
      <h1 className='text-4xl text-white font-bold hover:scale-110 transition-transform duration-200 ease-in-out'> Reset Counter ?</h1>
      <button className='text-3xl text-white font-bold hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer' onClick={ () => {
                setCount(0); 
                onClose();  
             }}>Yes</button>
      <button className='text-3xl text-white font-bold hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer' onClick={onClose}>No</button>
    </div>

    </div>
  )
}

export default Reset
