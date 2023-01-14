import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {add_task } from '../redux/Actions/TaskActions'
function Addtask() {
const dispatch = useDispatch()
const [input,setInput] = useState(
    {description : " "}
)
const addNewToDO =() =>{
    dispatch(add_task(input))
}


  return (
    <div>
    
<input type={"text"} onChange={(e)=>setInput({description : e.target.value}) }></input>
<button onClick={addNewToDO}> Add_New_Todo</button>

    </div>
  )
}

export default Addtask