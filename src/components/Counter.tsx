import  { useState } from 'react'

function Counter({ count, setCount }: { count: number; setCount: (c:number)=>void }) {
  
  return (
    <div className='flex items-center gap-10  justify-between mt-50 '>
         <button  className={`text-9xl text-white cursor-pointer transition-opacity duration-200 ${count === 0 ? 'opacity-0' : 'opacity-100'}`}
      disabled={count === 0} onClick={() => setCount(count-1)}>-</button>

        <span className='text-9xl text-white cursor-pointer '>{count}</span>

        <button className='text-9xl text-white cursor-pointer ' onClick={() => setCount(count+1)}>+</button>
      
    </div>
  )
}

export default Counter

