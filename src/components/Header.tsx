import React, { useState } from 'react'
import { IoMdSettings } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import InfoPage from './InfoPage';
import  Setting from './Setting';
import  Reset from './Reset';

function Header( { count, setCount , bgColor, setBgColor }: { count: number; setCount: (c:number)=>void ; bgColor:string; setBgColor:(c:string)=>void} ) {
    const [active,setActive] = useState<"info" | "setting" | "reset" | null>(null)

    const infoHandler = ()=> setActive(active === "info" ? null : "info");
    const setHandler = () => setActive(active === "setting" ? null : "setting");
    const resetHandler = () => setActive(active === "reset" ? null : "reset");
  return (
    <div className='flex items-center p-5  justify-center '>
          {active === null  ? (<button className=' py-4 px-5 text-white font-bold hover:scale-130 ease-in-out transition-all duration-200' onClick={infoHandler}><IoIosInformationCircle  className='w-10 h-10'/></button>) : null}
          {active === null  ? ( <button  className=' py-4 px-5 text-white font-bold hover:scale-130 ease-in-out transition-all duration-200' onClick={setHandler}><IoMdSettings  className='w-10 h-10'/></button>) : null}
          {active === null  ? (<button  className=' py-4 px-5 text-white font-bold hover:scale-130 ease-in-out transition-all duration-200' onClick={resetHandler}><GrPowerReset className='w-10 h-10' /></button>) : null}
         
          

          {active === 'info' && <InfoPage bgColor={bgColor }  onClose={() => setActive(null)} />}
          {active === 'setting' && <Setting bgColor={bgColor } setBgColor={setBgColor} count={count} setCount={setCount} onClose={() => setActive(null)} />}
          {active === 'reset' && <Reset bgColor={bgColor }   setCount={setCount} onClose={() => setActive(null)}/>}
        

      
    </div>
  )
}

export default Header
