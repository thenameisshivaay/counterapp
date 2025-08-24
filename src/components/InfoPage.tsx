import React from 'react'
import { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

function InfoPage({ onClose,bgColor }: { onClose: () => void; bgColor:string; }) {
  
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center' style={{ backgroundColor: bgColor, backdropFilter: 'blur(10px)' }} onClick={onClose} >

      <button  className=' absolute top-2 right-2 text-white text-6xl hover:scale-110 transition-transform duration-200 cursor-pointer' onClick={onClose}><IoIosCloseCircleOutline /></button>

      <div className="relative flex flex-col gap-4 p-6  w-[100%] max-w-md"
        onClick={(e) => e.stopPropagation()}>
        
        <h1 className='text-white text-center text-4xl font-bold mb-5 hover:scale-110 transition-transform duration-200'>Simple Counter</h1>
        <p className='text-white text-center text-2xl  mb-6 hover:scale-110 transition-transform duration-200'>A simple tool for counting things and keeping track of numbers</p>
        <p className='text-white text-3xl font-semibold text-center hover:scale-110 transition-transform duration-200'>Made By : <span>Abhishek Dixit</span></p>

      
    </div>
    </div>

  )
}

export default InfoPage
