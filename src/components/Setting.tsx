import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

function Setting( { onClose,count, setCount , bgColor, setBgColor }: { count: number; setCount: (c:number)=>void ; onClose: () => void ;bgColor:string; setBgColor:(c:string)=>void}) {
    


   const colors = [
    { name: 'Black', hex:'#1c1c1c' },
    { name: 'Gray', hex: '#61605e' },
    { name: 'Red', hex: '#fa505b' },
    { name: 'Green', hex: '#6efad5' },
    { name: 'Blue', hex: '#6e9afa' },
    { name: 'Yellow', hex: '#a88218' },
    { name: 'Magenta', hex: '#fa6ee3' },
    { name: 'Orange', hex: '#f29141' },  
    { name: 'Purple', hex: '#8f32d1' },  
  ];


  return (
     <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: bgColor, backdropFilter: 'blur(10px)' }}
      onClick={onClose} 
    >
       <button className="absolute top-2 right-2 text-white text-6xl hover:scale-105 transition-transform duration-200" onClick={onClose}><IoIosCloseCircleOutline /></button>
    <div
        className="relative flex flex-col gap-4 p-6  w-[100%] max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
      
       <div className='flex  gap-2 justify-center items-center border-5 border-white rounded-lg p-8'>
        <label className='text-white font-bold text-2xl' htmlFor="set" >Set Count</label>
       <input className='bg-white border-5 border-white rounded hover:scale-110 cursor-text transition-all duration-75 ease-in-out' type='number' id='set' name='set' value={count} min={0}
       max={100}
       step={1}
       onChange={(e) => setCount(Number(e.target.value))}  />
       </div>

       <div style={{ backgroundColor: bgColor}} className='p-2 rounded-lg border-5 border-white grid grid-cols-3 gap-2 mt-8'>
        <h2 className='col-span-3 text-center font-bold text-white text-2xl mb-6 hover:scale-105  transition-all duration-75 ease-in-out'>Select Background Color</h2>
        {
            colors.map((color) =>(
                <button className='rounded-lg hover:shadow-2xl hover: shadow-amber-100 hover:scale-110  transition-all duration-75 ease-in-out' key={color.hex} 
                onClick={() => setBgColor(color.hex)}
                style={{ backgroundColor: color.hex, color: '#fff', margin: '5px', padding: '10px', border: 'none', cursor: 'pointer' }}>
                    {color.name}
                </button>
            ))
        }

       </div>



              
    </div>
    </div>
  )
}

export default Setting
