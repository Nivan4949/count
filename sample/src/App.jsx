import { useState } from 'react'
import "./App.css"


function Count() {
    const[count,setcount]= useState(0)

  return(
      <div id="rizz">
      <h1>Count is {count}</h1>
      <div id="sigma">
    <button onClick={()=>{if(count<10){setcount(count+1)}}}>കൂട്ടാൻ</button>
    <button onClick={()=>{if(count>0){setcount(count-1)}}}>കുറകാൻ</button>
    </div></div>
  )
}
export default Count