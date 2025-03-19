import React from 'react'

export default function App1(props) {
  return (
    <div style={{color:'purple', background:'yellow'}}>
        <h2>Helllooo {props.name}. I am {props.age}.</h2>
    </div>
  )
}
