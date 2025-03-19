import React, { useState } from 'react'
// import { useState } from 'react';
export default function App3() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [msg, setMsg] = useState();
    const handleSubmit = () => {
        if(email==="sup@gmail.com" && password==="1234"){
            setMsg("Welcome sup!")
        }
        else{
            setMsg("Access Denied")
        }
    }
  return (
    <div>
        <h1>Login Form</h1>
        {msg}
        {/* <input type='text' placeholder='Enter name' ></input><br/><br/> */}
        <p><input type='email' placeholder='Enter email' onChange={(event)=>setEmail(event.target.value)}></input></p>
        <input type='password' placeholder='password' onChange={(event)=>setPassword(event.target.value)}></input><br/><br/>
        <button onClick={handleSubmit}>login</button>
    </div>
  )
}
