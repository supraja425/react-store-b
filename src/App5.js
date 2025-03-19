import React, { useState } from 'react'
import './App5.css'
export default function App5() {
    const [count,setCount]=useState(0);
    const increment =() =>{
        setCount(count+1)
    }
  return (
    <div className='App5'>
      <div>{count} <br/>
      <button onClick={increment}>Click</button></div>
    </div>
  )
}
