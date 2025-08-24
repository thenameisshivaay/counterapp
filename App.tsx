
import Counter from './components/Counter'
import Header from './components/Header'
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('#1c1c1c');
  

  return (
    <div  className="" style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
      <Header count={count} setCount={setCount}  bgColor={bgColor } setBgColor={setBgColor}/>
      <Counter count={count} setCount={setCount}/>

    </div>
  )
}

export default App
